import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

import { Car } from "../shared/car.model";
import { CarService } from "../shared/car.service";

/* ***********************************************************
* This is the item details component in the master-detail structure.
* This component retrieves the passed parameter from the master list component,
* finds the data item by this parameter and displays the detailed data item information.
*************************************************************/
@Component({
    selector: "CarDetail",
    templateUrl: "./car-detail.component.html"
})
export class CarDetailComponent implements OnInit {
    private _car: Car;

    constructor(
        private _carService: CarService,
        private _pageRoute: PageRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    /* ***********************************************************
    * Use the "ngOnInit" handler to get the data item id parameter passed through navigation.
    * Get the data item details from the data service using this id and assign it to the
    * private property that holds it inside the component.
    *************************************************************/
    ngOnInit(): void {
        /* ***********************************************************
        * Learn more about how to get navigation parameters in this documentation article:
        * http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
        *************************************************************/
        this._pageRoute.activatedRoute
            .pipe(switchMap((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
                const carId = params.id;
                if (carId === "002") {
                    this._car = {
                        id: "002",
                        name: "Umberlla",
                        hasAC: true,
                        seats: "Maily",
                        luggage: 5,
                        class: "UV-Blocker Large Folding UV Umbrella",
                        doors: 6,
                        price: 250,
                        transmission: "Available",
                        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51AJLEoQJqL._SL1000_.jpg",
                        imageStoragePath: "class"
                    };
                } else if (carId === "003") {
                    this._car = {
                        id: "003",
                        name: "Rain Coat",
                        hasAC: true,
                        seats: "Laily",
                        luggage: 5,
                        class: "Mirakii Men and Women XL Rain Coat",
                        doors: 6,
                        price: 750,
                        transmission: "Available",
                        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61aKsQRyg8L._UL1372_.jpg",
                        imageStoragePath: "class"
                    };
                } else if (carId === "004") {
                    this._car = {
                        id: "004",
                        name: "Lunch Box",
                        hasAC: true,
                        seats: "Baily",
                        luggage: 5,
                        class: "Signoraware Sleek",
                        doors: 6,
                        price: 200,
                        transmission: "Not Available",
                        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61V6OcrrFKL._SL1500_.jpg",
                        imageStoragePath: "class"
                    };
                } else {
                    this._car = {
                        id: "xx01",
                        name: "Bag",
                        hasAC: false,
                        seats: "Wild Craft",
                        luggage: 5,
                        class: "Wild Craft",
                        doors: 6,
                        price: 200,
                        transmission: "Available",
                        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91T4CGVR6eL._SY879_.jpg",
                        imageStoragePath: "class"
                    };
                }

            });

    }

    get car(): Car {
        return this._car;
    }

    /* ***********************************************************
    * The back button is essential for a master-detail feature.
    *************************************************************/
    onBackButtonTap(): void {
        this._routerExtensions.backToPreviousPage();
    }

    /* ***********************************************************
    * The master-detail template comes with an example of an item edit page.
    * Check out the edit page in the /cars/car-detail-edit folder.
    *************************************************************/
    onEditButtonTap(): void {
        this._routerExtensions.navigate(["/cars/car-detail-edit", this._car.id],
            {
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 200,
                    curve: "ease"
                }
            });
    }
}
