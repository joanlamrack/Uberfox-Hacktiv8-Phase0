const DataDealer = require("./datadealer.js");


//CRUD 
//DataDealer.deleteFromTable("Politicians", 22, "politicianId");
//DataDealer.insertIntoTable("Politicians", ["eri", "R", "IN", 12.000]);
//DataDealer.updateIntoTable("Politicians", "name", "John WICK", "politicianId", 21);


//DATA SEEDING;
//DataDealer.insertIntoTableFromCSV("Contacts", "./datasources/contact.csv");
//DataDealer.insertIntoTableFromCSV("Groups", "./datasources/group.csv");
//DataDealer.insertIntoTableFromCSV("Contacts_Groups", "./datasources/contactgroup.csv");


// select Contacts.name, company, Groups.name as groupContact from Contacts 
// JOIN Contacts_Groups JOIN Groups ON Contacts.id = Contacts_Groups.contactId 
// AND Contacts_Groups.groupId = Groups.id order by Contacts.name;