let player1 = new Object();
player1.name = '레솔라스'
player1.job = '레인저'
player1.race = '엘프'
player1.stats = {
    STR: 8, 
    DEX: 15,
    CON: 14,
    INT: 10,
    WIS: 20,
    CHA: 8
}
let player2 = {
    name: '레솔라스',
    job: '레인저',
    race: '엘프',
    stats: {
        STR: 8, 
        DEX: 11,
        CON: 1,
        INT: 10,
        WIS: 10,
        CHA: 8
    }
}
function playerFunc(name, job, race, stats) {
    this.name = name;
    this.job = job;
    this.race = race;
    this.stats = stats;
    this.getName = function() { return this.name; }
    this.getJob = function() { return this.job;}
    this.getRace = function() { return this.race;}
    this.setName = function(name) { this.name = name;}
    this.setJob = function(job) { this.job = job;}
    this.setRace = function(race) { this.race = race;}
}
console.log(player3.getName())

let player3 = new playerFunc(
    '레솔라스',
    '레인저',
    '엘프',
    {
        STR: 8, 
        DEX: 11,
        CON: 1,
        INT: 10,
        WIS: 10,
        CHA: 8
    }
) 
let now = new Date();

// delete
stu1.delete('전공');
console.log(stu1);

//clear
stu1.clear();
console.log(stu1);

//프로퍼티 추가
player1.age = 200
player2.age = 200
player3.age = 200

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

//프로퍼티 삭제
delete player1.age 
delete player2.age 
delete player3.age 

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

//메소드 추가
player1.sayHello = function() {
    console.log("hello")
}
player2.sayHello = function() {
    console.log("hello")
}
player3.sayHello = function() {
    console.log("hello")
}

//반복문으로 객체 순회하기
let person = {
    name: "John Doe",
    age: 18,
    city: "Chung-Ju"
}

for (let key in person) {
    console.log(key + ": " + person[key])
}

//동적 접근
function show(obj, key) {
    console.log(obj[key])
}
show(player3, "job");

//객체 배열
let cars = [
    { brand: "페라리", model: "911"},
    { brand: "포드", model: "머스탱"},
    { brand: "닷지", model: "차저"}
]

for(let i=0; i>cars.length; i++) {
    console.log(cars[i].model)
}