import { DataTypes, Model, Sequelize, Op, fn, col, literal } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./gunro.db"
});

class workingStudent extends Model { }

workingStudent.init({
    name: DataTypes.STRING,
    studentId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN,
    grade: DataTypes.FLOAT
}, {
    sequelize,
    modelName: "workingStudent"
});

class workplace extends Model {}
workplace.init({
    place: DataTypes.STRING,
    buildingName: DataTypes.STRING,
    department: DataTypes.BOOLEAN,
    money: DataTypes.STRING
}, {
    sequelize,
    modelName: "workplace"
});

class workingRecord extends Model {}
workingRecord.init({
    workingStudentName: DataTypes.STRING,
    place: DataTypes.STRING,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    totalMoney: DataTypes.INTEGER
}, {
    sequelize,
    modelName: "workingRecord"
});



(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true });

        const createStudent = await workingStudent.bulkCreate([
            {name: "김옥지", studentId: 201811, isActive: true, grade: 4.2},
            {name: "김빵빵", studentId: 201812, isActive: true, grade: 4.5},
            {name: "제임스", studentId: 201115, isActive: true, grade: 4.5},
            {name: "까무라", studentId: 201121, isActive: true, grade: 3.9},
            {name: "아이코", studentId: 201121, isActive: true, grade: 1.0}

        ])

        const createPlace = await workplace.bulkCreate([
            {place: "CS팀", buildingName: "원흥관", department: "공과대학", money: 9620},
            {place: "학사운영팀", buildingName: "신공학관", department: "공과대학", money: 11150},
            {place: "정각원", buildingName: "명진관", department: "불교대학", money: 200000}
        ])

        const createRecord = await workingRecord.bulkCreate([
            {workingStudentName: "김옥지", place:"원흥관" ,startTime:"18:00", endTime: "19:00", totalMoney: 200000},
            {workingStudentName: "김옥지", place:"원흥관" ,startTime:"20:00", endTime: "22:00", totalMoney: 200000},
            {workingStudentName: "김옥지", place:"원흥관" ,startTime:"22:00", endTime: "23:00", totalMoney: 200000},
            {workingStudentName: "김옥지", place:"원흥관" ,startTime:"23:00", endTime: "23:30", totalMoney: 200000},
            {workingStudentName: "김빵빵", place:"정각원" ,startTime:"18:00", endTime: "19:00", totalMoney: 200000},
            {workingStudentName: "김빵빵", place:"정각원" ,startTime:"20:00", endTime: "22:00", totalMoney: 200000},
            {workingStudentName: "김빵빵", place:"정각원" ,startTime:"22:00", endTime: "23:00", totalMoney: 200000},
            {workingStudentName: "제임스", place:"학사운영팀" ,startTime:"18:00", endTime: "19:00", totalMoney: 200000},
            {workingStudentName: "제임스", place:"학사운영팀" ,startTime:"20:00", endTime: "22:00", totalMoney: 200000},
            {workingStudentName: "제임스", place:"학사운영팀" ,startTime:"22:00", endTime: "23:00", totalMoney: 200000},

        ])

    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
