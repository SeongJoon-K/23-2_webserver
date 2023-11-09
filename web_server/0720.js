import { DataTypes, Sequelize, Model } from "sequelize";

const sequelize = new Sequelize({
    dialect:"sqlite",
    storage: "orm.db"
})

/**
 * 주민등록번호가 00년생 이후일때 0x로 시작하기 때문에 정수로 저장하기 어렵다.
 * 학번이나 주민번호는 STRING 으로 저장을 하는 것이 좋다.
 */
class Student extends Model{}
Student.init({
    name:DataTypes.STRING,
    studentId: DataTypes.STRING, // 테이블의 앞글자 정도 따서 만들어 두는 걸 추천한다.
    status: DataTypes.BOOLEAN, // 상태값을 불린형으로 쓰면 후회하는 경우가 많음 -> STRING을 사용하는 게 좋다.
    gpa: DataTypes.FLOAT,
}, {sequelize, modelName:"student"});

class WorkPlace extends Model {}
WorkPlace.init({
    place: DataTypes.STRING,
    building: DataTypes.STRING,
    department: DataTypes.STRING,
    wage: DataTypes.INTEGER // 테이블 생성 후 가격 정보는 보통 FLOAT로 처리하게 된다.
}, {sequelize, modelName: "workplace"})

class WorkHistory extends Model{}
WorkHistory.init({
    studentId: DataTypes.STRING,
    place: DataTypes.STRING,
    startTime: DataTypes.STRING,
    finishTime: DataTypes.STRING,
    totalWage: DataTypes.INTEGER
}, {sequelize, modelName:"workhistory"})

// sequelize.sync()

Student.create({
    name:"정상수",
    studentId: "2018112345",
    status:"재학",
    gpa: 4.0
})

WorkPlace.create({
    place: "중앙도사관",
    building:"중앙도서관",
    department:"학부",
    wage:9800
})

WorkPlace.create({
    place: "취업지원센터",
    building:"정보문화관",
    department:"SW융합공학부",
    wage:9100
})

WorkHistory.create({
    studentId:"2018112345",
    place:"중앙도서관",
    startTime:"20231109 13:00",
    finishTime:"2023110 17:00",
    totalWage:9800* 4
})