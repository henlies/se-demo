package main

import (
	"github.com/henlies/se/backend/controller"

	"github.com/henlies/se/backend/entity"

	"github.com/gin-gonic/gin"
)

func main() {
	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())

	// เสริม
	r.GET("/customers", controller.ListCustomers)
	r.GET("/customer/:id", controller.GetCustomer)
	r.POST("/login", controller.Login)

	// SERVICE
	r.GET("/services", controller.ListServices)
	r.GET("/service/:id", controller.GetService)
	r.GET("/services/customer/:id", controller.ListServicesByUID)
	r.POST("/service", controller.CreateService)
	r.PATCH("/services", controller.UpdateService)
	r.DELETE("/services/:id", controller.DeleteService)

	// PAYMENT
	r.GET("/payments", controller.ListPayments)
	r.GET("/payment/:id", controller.GetPayment)
	r.GET("/payment/customer/:id", controller.ListPaymentByUID)
	r.POST("/payment", controller.CreatePayment)

	r.Run()
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {

		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}
