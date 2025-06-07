#!/usr/bin/env python3
"""
Setup script for Python Employment Trend Forecasting Service
"""

import os
import sys
import subprocess
import shutil
from pathlib import Path

def check_python_version():
    """Check if Python version is compatible"""
    if sys.version_info < (3, 8):
        print("❌ Python 3.8 or higher is required")
        print(f"Current version: {sys.version}")
        return False
    
    print(f"✅ Python version: {sys.version}")
    return True

def check_pip():
    """Check if pip is available"""
    try:
        subprocess.run([sys.executable, '-m', 'pip', '--version'], 
                      check=True, capture_output=True)
        print("✅ pip is available")
        return True
    except subprocess.CalledProcessError:
        print("❌ pip is not available")
        return False

def install_requirements():
    """Install Python requirements"""
    try:
        print("📦 Installing Python requirements...")
        
        # Upgrade pip first
        subprocess.run([sys.executable, '-m', 'pip', 'install', '--upgrade', 'pip'], 
                      check=True)
        
        # Install requirements
        subprocess.run([sys.executable, '-m', 'pip', 'install', '-r', 'requirements.txt'], 
                      check=True)
        
        print("✅ Requirements installed successfully")
        return True
        
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to install requirements: {e}")
        return False

def setup_environment():
    """Setup environment file"""
    env_example = Path('.env.example')
    env_file = Path('.env')
    
    if env_example.exists() and not env_file.exists():
        shutil.copy(env_example, env_file)
        print("✅ Created .env file from .env.example")
        print("⚠️  Please update .env with your actual database credentials")
    elif env_file.exists():
        print("✅ .env file already exists")
    else:
        print("⚠️  No .env.example file found")

def test_imports():
    """Test if all required packages can be imported"""
    required_packages = [
        'pandas',
        'numpy',
        'sklearn',
        'prophet',
        'flask',
        'mysql.connector',
        'sqlalchemy'
    ]
    
    print("🧪 Testing package imports...")
    
    failed_imports = []
    for package in required_packages:
        try:
            __import__(package)
            print(f"  ✅ {package}")
        except ImportError:
            print(f"  ❌ {package}")
            failed_imports.append(package)
    
    if failed_imports:
        print(f"\n❌ Failed to import: {', '.join(failed_imports)}")
        return False
    
    print("✅ All packages imported successfully")
    return True

def test_database_connection():
    """Test database connection"""
    try:
        from database_connector import DatabaseConnector
        
        print("🔌 Testing database connection...")
        db = DatabaseConnector()
        
        if db.test_connection():
            print("✅ Database connection successful")
            return True
        else:
            print("❌ Database connection failed")
            print("⚠️  Please check your database credentials in .env file")
            return False
            
    except Exception as e:
        print(f"❌ Database connection test failed: {e}")
        return False

def create_directories():
    """Create necessary directories"""
    directories = [
        'logs',
        'output',
        'models'
    ]
    
    for directory in directories:
        Path(directory).mkdir(exist_ok=True)
        print(f"✅ Created directory: {directory}")

def main():
    """Main setup function"""
    print("🚀 Setting up Python Employment Trend Forecasting Service")
    print("=" * 60)
    
    # Check Python version
    if not check_python_version():
        sys.exit(1)
    
    # Check pip
    if not check_pip():
        sys.exit(1)
    
    # Install requirements
    if not install_requirements():
        sys.exit(1)
    
    # Setup environment
    setup_environment()
    
    # Create directories
    create_directories()
    
    # Test imports
    if not test_imports():
        print("\n⚠️  Some packages failed to import. Please check the installation.")
        print("You may need to install additional system dependencies.")
        sys.exit(1)
    
    # Test database connection
    if not test_database_connection():
        print("\n⚠️  Database connection failed. Please check your configuration.")
        print("The service may still work for some features that don't require database access.")
    
    print("\n" + "=" * 60)
    print("✅ Setup completed successfully!")
    print("\n📋 Next steps:")
    print("1. Update .env file with your database credentials")
    print("2. Run: python forecasting_api.py")
    print("3. Test the API at: http://localhost:5001/health")
    print("\n🔧 Available commands:")
    print("- python forecasting_api.py          # Start the API service")
    print("- python trend_forecasting.py        # Run standalone analysis")
    print("- python database_connector.py       # Test database connection")

if __name__ == "__main__":
    main()
