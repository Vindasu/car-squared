# CarCar

Team:

* Edward Nguyen - Service
* Alex Adams - Sales

## Design

Our project is broken into three sections:

* Inventory
* Sales
* Services

### Inventory

The inventory serves as the parent for the automobile model and the sales and service microservices poll to an automobile virtual object locally. 
The inventory service also hosts the manufacturer and vehicle model which are accessable globally via a linear foreignkey route (mfg accessible in vehiclemodel, vehicle model accessible in automobile, automobile polled to the service and sales microservices). 

### Sales and Services

The sales and service microservices are centered around their Sale and Appointment models respectively. A sale can be made with a salesperson, customer, and automobile and can be referenced in either the Sales List or the Sales History List the latter of which can use the employee name to sort. An appointment can be made with a technician, a customer (and their reason/date), and an automobile. If their automobile is present in the inventory model, they receive a "VIP" state. They can be sorted by a VIN search function. The inventory model was also integrated with Pexels API to populate the inventory with images of the make and model of your car for convenience. 

## Service microservice

I created a Technician and an Appointment model, with the technician as a foreign key to the appointment. I also created an Automobile value object within the Services app in order to pull data from the Automobile entity from the Inventory microservice.

Initially, I included the AutomobileVO as a foreign key in the Appointment model, but as I progressed with the project, I realized that it wasn't necessary to directly link the two models in models.py.

The AutomobileVO pulls data from the Automobile entity through a polling function. From here, when an Appointment is created in my views.py file, the POST function looks through the AutomobileVO's vin numbers (which again is pulled from the entity), and then does a cross-check to see if the Appointment's vin number is equal. If it is, then we know that the car for the appointment came from the original inventory. This function then changes the boolean status of the VIP attribute of the Appointment model, which is then used on the React list page to show which appointments have VIP customers.

Secondly, you can cancel an appointment by simply calling the DELETE method when the cancel button is clicked on the React page. And finally, you can change the status of an appointment from incomplete to complete by calling the PUT method when the "complete" button is clicked on the React page. This status attribute is also a boolean field.

The service history React page filters all appointments with a boolean status of complete for its status attribute. And then the search bar filters through the Appointment's vin attribute. If the search term is empty, then the list simply defaults to returning all completed appointments.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

The sales microservice is broken into three models:
* AutomobileVO
* Employee
* Customer

### Models

1. AutomobileVO 
    * The AutomobileVO accesses the inventory microservice Automobile model via a polling function. Then, when the AutomobileVO model is accessed by a view, it assesses the import_href value and confirms that the hrefs are equivalent between the services. 

2. Employee
    * The Employee model takes a name and an employee_number. It is unique in that the employee_number and the ID are not necessarily equivalent. We thought it would be nice for employees to be able to select their own employee number and we use the native ID for equivalency. 
3. Customer
    * The Customer model takes a name, an address, and a phone_number.
4. Sale
    * The Sale model has foreignkeys to the Employee model, the AutomobileVO model, and the Customer model. It also has a price variable that is a decimalfield (with 2 decimal places representing a dolar amount). 

### Integration

The Sale model requires an automobile with the manufacturer and vehicle model characteristics. Because the Inventory microservice hosts the the required models, the polling service between Inventory and Sales microservices is instrumental to the overall integration.