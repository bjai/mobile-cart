import { Component, OnDestroy, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData } from "nativescript-ui-listview";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { ObservableArray } from "tns-core-modules/data/observable-array";

import { Car } from "./shared/car.model";
import { CarService } from "./shared/car.service";

@Component({
    selector: "CarsList",
    templateUrl: "./car-list.component.html",
    styleUrls: ["./car-list.component.scss"]
})
export class CarListComponent implements OnInit, OnDestroy {
    private _isLoading: boolean = false;
    private _cars = [{
        id: "001",
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
    },
    {
        id: "002",
        name: "Umberlla",
        hasAC: true,
        seats: "class",
        luggage: 5,
        class: "UV-Blocker Large Folding UV Umbrella",
        doors: 6,
        price: 250,
        transmission: "Available",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51AJLEoQJqL._SL1000_.jpg",
        imageStoragePath: "class"
    },
    {
        id: "003",
        name: "Rain Coat",
        hasAC: true,
        seats: "class",
        luggage: 5,
        class: "Mirakii Men and Women XL Rain Coat",
        doors: 6,
        price: 750,
        transmission: "Available",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61aKsQRyg8L._UL1372_.jpg",
        imageStoragePath: "class"
    },
    {
        id: "004",
        name: "Lunch Box",
        hasAC: true,
        seats: "class",
        luggage: 5,
        class: "Signoraware Sleek",
        doors: 6,
        price: 200,
        transmission: "Not Available",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61V6OcrrFKL._SL1500_.jpg",
        imageStoragePath: "class"
    }];

    private _dataSubscription: Subscription;

    constructor(
        private _carService: CarService,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        // do nothing

    }

    ngOnDestroy(): void {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    }

    get cars(): any {
        return this._cars;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    onCarItemTap(args: ListViewEventData): void {
        const tappedCarItem = args.view.bindingContext;

        this._routerExtensions.navigate(["/cars/car-detail", tappedCarItem.id],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }
}
