export const validateQualification = (req, res, next) => {
    const { educationLevel, startDate } = req.body;
    
    if (!educationLevel || !startDate) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    
    if (isNaN(new Date(startDate))) {
      return res.status(400).json({ error: "Invalid start date format" });
    }
  
    next();
  };