package entity

import (
	"time"

	"gorm.io/gorm"
)

// ========================= SYSTEM FRIEND =========================

type Customer struct {
	gorm.Model
	Name     string
	Username string
	Password string
	Age      int
	Phone    string
	Email    string    `gorm:"uniqueIndex"`
	Service  []Service `gorm:"foreignKey:CustomerID"`
	Payment  []Payment `gorm:"foreignKey:CustomerID"`
}

// ========================= SERVICE =========================

type Food struct {
	gorm.Model
	Name    string
	Price   int
	Item    int
	Service []Service `gorm:"foreignKey:FoodID"`
}

type Drink struct {
	gorm.Model
	Name    string
	Price   int
	Item    int
	Service []Service `gorm:"foreignKey:DrinkID"`
}

type Accessories struct {
	gorm.Model
	Name    string
	Price   int
	Item    int
	Service []Service `gorm:"foreignKey:AccessoriesID"`
}

type Service struct {
	gorm.Model
	CustomerID    *uint
	Customer      Customer `gorm:"references:ID"`
	Time          time.Time
	FoodID        *uint
	Food          Food `gorm:"references:ID"`
	DrinkID       *uint
	Drink         Drink `gorm:"references:ID"`
	AccessoriesID *uint
	Accessories   Accessories `gorm:"references:ID"`
}

// ========================= PAYMENT =========================

type Place struct {
	gorm.Model
	Name    string
	Payment []Payment `gorm:"foreignKey:PlaceID"`
}

type Crypto struct {
	gorm.Model
	Name            string
	PublicKey       string
	Picture         string
	PaymentMethodID int
	PaymentMethod   PaymentMethod `gorm:"references:ID"`
}

type Bank struct {
	gorm.Model
	Name            string
	Number          string
	Picture         string
	PaymentMethodID int
	PaymentMethod   PaymentMethod `gorm:"references:ID"`
}

type PaymentMethod struct {
	gorm.Model
	Name    string
	Bank    []Bank    `gorm:"foreignKey:PaymentMethodID"`
	Crypto  []Crypto  `gorm:"foreignKey:PaymentMethodID"`
	Payment []Payment `gorm:"foreignKey:PaymentMethodID"`
}

type Payment struct {
	gorm.Model
	CustomerID      *uint
	Customer        Customer `gorm:"references:ID"`
	PaymentMethodID *uint
	PaymentMethod   PaymentMethod `gorm:"references:ID"`
	PlaceID         *uint
	Place           Place `gorm:"references:ID"`
	Time            time.Time
	Picture         string
}
