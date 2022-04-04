package de.telran;

public class Car extends Vehicle {
    int passengerSeatsNumber;
    int loadCapacity;

    public Car(int vehicleRegistrationPlate, int yearOfIssue, int passengerSeatsNumber, int loadCapacity) {
        super(vehicleRegistrationPlate, yearOfIssue);
        this.passengerSeatsNumber = passengerSeatsNumber;
        this.loadCapacity = loadCapacity;
    }

    public int getPassengerSeatsNumber() {
        return passengerSeatsNumber;
    }

    public void setPassengerSeatsNumber(int passengerSeatsNumber) {
        this.passengerSeatsNumber = passengerSeatsNumber;
    }

    public int getLoadCapacity() {
        return loadCapacity;
    }

    public void setLoadCapacity(int loadCapacity) {
        this.loadCapacity = loadCapacity;
    }

    @Override
    public String toString() {
        return "Car{" +
                "passengerSeatsNumber=" + passengerSeatsNumber +
                ", loadCapacity=" + loadCapacity +
                ", vehicleRegistrationPlate=" + vehicleRegistrationPlate +
                ", yearOfIssue=" + yearOfIssue +
                '}';
    }

    @Override
    public int goToRace() {
        System.out.print("The car nr. " + getVehicleRegistrationPlate() + " carried ");
        return getPassengerSeatsNumber();
    }
}
