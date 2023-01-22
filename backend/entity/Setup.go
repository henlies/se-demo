package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {

	return db
}

func SetupDatabase() {

	database, err := gorm.Open(sqlite.Open("se.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	database.AutoMigrate(
		// FRIEND
		&Customer{},
		// SERVICE
		&Food{},
		&Drink{},
		&Accessories{},
		&Service{},
		// PAYMENT
		&Place{},
		&Bank{},
		&Crypto{},
		&PaymentMethod{},
		&Payment{},
	)
	db = database

	SetupIntoDatabase(db)
}
