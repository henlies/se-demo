package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/henlies/se/backend/entity"
)

// GET /customers
func ListCustomers(c *gin.Context) {
	var customers []entity.Customer
	if err := entity.DB().Raw("SELECT * FROM customers").Find(&customers).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": customers})
}
