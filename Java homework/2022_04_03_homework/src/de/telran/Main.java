package de.telran;

public class Main {

    public static void main(String[] args) {
        Bus bus1 = new Bus(5, 7, 14);
        Truck truck1 = new Truck(101128187, 2014, 12000);
        Car mercedes = new Car(808888188, 2022, 4, 1000);
        Vehicle[] vehicles = new Vehicle[]{new Bus(5714, 2005, 11),
                new Bus(335088, 2007, 14),
                bus1, truck1, mercedes};

        for (int i = 0; i < vehicles.length; i++) {
            printGoToRace(vehicles[i]);
        }
    }

    public static void printGoToRace(Vehicle vehicle) {
        System.out.println(vehicle.goToRace());
    }

}
