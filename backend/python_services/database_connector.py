"""
Database Connector for Employment Trend Forecasting
Handles MySQL database connections and queries
"""

import os
import pandas as pd
import mysql.connector
from sqlalchemy import create_engine
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class DatabaseConnector:
    def __init__(self):
        self.connection_params = {
            'host': os.getenv('DB_HOST', 'localhost'),
            'port': int(os.getenv('DB_PORT', 3306)),
            'user': os.getenv('DB_USER', 'root'),
            'password': os.getenv('DB_PASSWORD', ''),
            'database': os.getenv('DB_NAME', 'job_matching_db')
        }
        
        # Create SQLAlchemy engine for pandas integration
        self.engine = self._create_engine()
    
    def _create_engine(self):
        """Create SQLAlchemy engine for database connection"""
        try:
            connection_string = (
                f"mysql+pymysql://{self.connection_params['user']}:"
                f"{self.connection_params['password']}@"
                f"{self.connection_params['host']}:"
                f"{self.connection_params['port']}/"
                f"{self.connection_params['database']}"
            )
            return create_engine(connection_string)
        except Exception as e:
            print(f"Error creating database engine: {e}")
            return None
    
    def test_connection(self):
        """Test database connection"""
        try:
            connection = mysql.connector.connect(**self.connection_params)
            if connection.is_connected():
                print("✅ Database connection successful")
                connection.close()
                return True
        except Exception as e:
            print(f"❌ Database connection failed: {e}")
            return False
    
    def query_to_dataframe(self, query, params=None):
        """Execute query and return results as pandas DataFrame"""
        try:
            if self.engine is None:
                raise Exception("Database engine not initialized")
            
            df = pd.read_sql(query, self.engine, params=params)
            return df
        except Exception as e:
            print(f"Error executing query: {e}")
            return pd.DataFrame()
    
    def execute_query(self, query, params=None):
        """Execute a query and return raw results"""
        try:
            connection = mysql.connector.connect(**self.connection_params)
            cursor = connection.cursor(dictionary=True)
            
            if params:
                cursor.execute(query, params)
            else:
                cursor.execute(query)
            
            results = cursor.fetchall()
            
            cursor.close()
            connection.close()
            
            return results
        except Exception as e:
            print(f"Error executing query: {e}")
            return []
    
    def insert_trend_data(self, trend_data):
        """Insert trend analysis results into MarketTrend table"""
        try:
            connection = mysql.connector.connect(**self.connection_params)
            cursor = connection.cursor()
            
            insert_query = """
            INSERT INTO MarketTrend (industry, metric, value, period, date, source)
            VALUES (%s, %s, %s, %s, %s, %s)
            ON DUPLICATE KEY UPDATE
            value = VALUES(value),
            createdAt = NOW()
            """
            
            for trend in trend_data:
                cursor.execute(insert_query, (
                    trend['industry'],
                    trend['metric'],
                    trend['value'],
                    trend['period'],
                    trend['date'],
                    trend.get('source', 'python_forecasting')
                ))
            
            connection.commit()
            cursor.close()
            connection.close()
            
            print(f"✅ Inserted {len(trend_data)} trend records")
            return True
            
        except Exception as e:
            print(f"Error inserting trend data: {e}")
            return False
    
    def get_job_categories(self):
        """Get all active job categories"""
        query = "SELECT id, name, description FROM JobCategory WHERE isActive = 1"
        return self.query_to_dataframe(query)
    
    def get_skills_master(self):
        """Get all active skills"""
        query = "SELECT id, name, category, description FROM SkillMaster WHERE isActive = 1"
        return self.query_to_dataframe(query)
    
    def get_recent_jobs(self, days=30):
        """Get recent job postings"""
        query = """
        SELECT j.*, jc.name as category_name
        FROM Job j
        LEFT JOIN _JobToJobCategory jtc ON j.id = jtc.A
        LEFT JOIN JobCategory jc ON jtc.B = jc.id
        WHERE j.createdAt >= DATE_SUB(NOW(), INTERVAL %s DAY)
        ORDER BY j.createdAt DESC
        """
        return self.query_to_dataframe(query, (days,))
    
    def get_job_requirements_analysis(self, days=90):
        """Get job requirements analysis data"""
        query = """
        SELECT 
            j.id as job_id,
            j.title,
            j.createdAt,
            jc.name as category,
            sm.name as skill_name,
            sm.category as skill_category,
            jr.importance,
            jr.proficiencyLevel,
            jr.yearsRequired
        FROM Job j
        JOIN JobRequirement jr ON j.id = jr.jobId
        JOIN SkillMaster sm ON jr.skillMasterId = sm.id
        LEFT JOIN _JobToJobCategory jtc ON j.id = jtc.A
        LEFT JOIN JobCategory jc ON jtc.B = jc.id
        WHERE j.createdAt >= DATE_SUB(NOW(), INTERVAL %s DAY)
            AND j.status IN ('ACTIVE', 'CLOSED')
            AND sm.isActive = 1
        ORDER BY j.createdAt DESC
        """
        return self.query_to_dataframe(query, (days,))
    
    def close(self):
        """Close database connections"""
        if self.engine:
            self.engine.dispose()

# Test the connection when module is imported
if __name__ == "__main__":
    db = DatabaseConnector()
    db.test_connection()
