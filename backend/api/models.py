from django.db import models


class Item(models.Model):
    first_name = models.CharField(max_length=100)
    middle_name = models.TextField(max_length=100)
    last_name = models.TextField(max_length=100)
    address = models.TextField(max_length=100)
    email = models.TextField(max_length=100)
    phone = models.TextField(max_length=100)


    def __str__(self):
        return self.first_name