const mysql = require('mysql')


const dataBaseConnectionConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database:'my_app'
};

const con = mysql.createConnection(dataBaseConnectionConfig);

con.connect((error) =>{
    if (error){
        console.log("Data base connection fail")
    }
    else{
        console.log("Sucecssfuly connected with database");
        dataInsert(con);
    }
});


const dataInsert = (con)=>{
    let sqlQuery = "INSERT INTO `user_list`(`full_name`, `user_name`, `email`, `phone_no`, `birth_date`, `address`, `city`, `country`) VALUES ('Tauhidul Hossain Tanmoy','tanmoy','tauhidulhossaintanmoy@gmail.com','+8801868538686','01/12/1999','Shibgonj, Rupgonj, Narayangonj','Dhaka','Bangladesh')"
    con.query(sqlQuery, (error) => {
        if (error){
            console.log("Insertation fail");
        }
        else{
            console.log("Insertation Success")
        }
    })
};