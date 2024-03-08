`DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'workouts') THEN
        CREATE TABLE workouts (
            id UUID PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            mode VARCHAR(100) UNIQUE NOT NULL,
            equipment VARCHAR[],
            exercises VARCHAR[],
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            trainerTips VARCHAR[]
        );
    END IF;
END $$;`