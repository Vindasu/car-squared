# CarCar

Team:

* Edward Nguyen - Service
* Alex Adams - Sales

## Design

## Service microservice

I created a Technician and an Appointment model, with the technician as a foreign key to the appointment. I also created an Automobile value object within the Services app in order to pull data from the Automobile entity from the Inventory microservice.

Initially, I included the AutomobileVO as a foreign key in the Appointment model, but as I progressed with the project, I realized that it wasn't necessary to directly link the two models in models.py.

The AutomobileVO pulls data from the Automobile entity through a polling function. From here, when an Appointment is created in my views.py file, the POST function looks through the AutomobileVO's vin numbers (which again is pulled from the entity), and then does a cross-check to see if the Appointment's vin number is equal. If it is, then we know that the car for the appointment came from the original inventory. This function then changes the boolean status of the VIP attribute of the Appointment model, which is then used on the React list page to show which appointments have VIP customers.

Secondly, you can cancel an appointment by simply calling the DELETE method when the cancel button is clicked on the React page. And finally, you can change the status of an appointment from incomplete to complete by calling the PUT method when the "complete" button is clicked on the React page. This status attribute is also a boolean field.

The service history React page filters all appointments with a boolean status of complete for its status attribute. And then the search bar filters through the Appointment's vin attribute. If the search term is empty, then the list simply defaults to returning all completed appointments.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
