-- Fix chat message length limit
-- This will change the message column from VARCHAR(191) to TEXT
-- allowing much longer bot responses

USE job_match;

-- Update the ChatMessage table to allow longer messages
ALTER TABLE ChatMessage MODIFY COLUMN message TEXT;

-- Verify the change
DESCRIBE ChatMessage;
