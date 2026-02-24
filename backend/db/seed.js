const bcrypt = require('bcrypt');
const sequelize = require('./connection');
const User = require('../models/User');
const Institute = require('../models/Institute');
const Department = require('../models/Department');

const seed = async () => {
    try {
        // Disable FK checks to break the circular dependency:
        // User needs Institute, Institute needs User (createdBy)
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');

        // 1. Create the first SuperAdmin (no instituteId — spans all)
        const passwordHash = await bcrypt.hash('Admin@1234', 10);
        const [superAdmin] = await User.findOrCreate({
            where: { username: 'superadmin' },
            defaults: {
                fullName: 'Super Admin',
                username: 'superadmin',
                passwordHash,
                role: 'SuperAdmin',
                instituteId: null,
                departmentId: null,
                isActive: true,
                mustChangePassword: true,
                remarks: 'Seeded bootstrap SuperAdmin'
            }
        });
        console.log(`✔ SuperAdmin ready (ID: ${superAdmin.userId})`);

        // 2. Create the first Institute
        const [institute] = await Institute.findOrCreate({
            where: { instituteName: 'Greenfield Public School' },
            defaults: {
                instituteName: 'Greenfield Public School',
                shortName: 'GPS',
                email: 'admin@greenfieldschool.edu.in',
                phoneNo: '9800000001',
                address: '12, School Road',
                city: 'Mumbai',
                state: 'Maharashtra',
                pincode: '400001',
                isActive: true,
                remarks: 'Seeded bootstrap institute',
                createdBy: superAdmin.userId,
                updatedBy: superAdmin.userId
            }
        });
        console.log(`✔ Institute ready (ID: ${institute.instituteId})`);

        // 3. Create the first Department
        const [department] = await Department.findOrCreate({
            where: { departmentName: 'Administration', instituteId: institute.instituteId },
            defaults: {
                departmentName: 'Administration',
                shortName: 'ADMIN',
                instituteId: institute.instituteId,
                headPersonName: 'Super Admin',
                email: 'administration@greenfieldschool.edu.in',
                phoneNo: '9800000002',
                isActive: true,
                displayOrder: 1,
                remarks: 'Seeded bootstrap department',
                createdBy: superAdmin.userId,
                updatedBy: superAdmin.userId
            }
        });
        console.log(`✔ Department ready (ID: ${department.departmentId})`);

        // Re-enable FK checks
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

        console.log('\n✅ Seed complete!');
        console.log('   Username : superadmin');
        console.log('   Password : Admin@1234');
        console.log('   ⚠  Change this password after first login.\n');

        process.exit(0);
    } catch (err) {
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        console.error('❌ Seed failed:', err.message);
        process.exit(1);
    }
};

seed();