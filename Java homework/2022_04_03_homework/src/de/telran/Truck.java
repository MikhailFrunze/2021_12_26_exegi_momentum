package de.telran;

public class Truck extends Vehicle {

    int loadCapacity;

    public Truck(int vehicleRegistrationPlate, int yearOfIssue, int loadCapacity) {
        super(vehicleRegistrationPlate, yearOfIssue);
        this.loadCapacity = loadCapacity;
    }

    public int getLoadCapacity() {
        return loadCapacity;
    }

    public void setLoadCapacity(int loadCapacity) {
        this.loadCapacity = loadCapacity;
    }

    @Override
    public String toString() {
        return "Truck{" +
                "loadCapacity=" + loadCapacity +
                ", vehicleRegistrationPlate=" + vehicleRegistrationPlate +
                ", yearOfIssue=" + yearOfIssue +
                '}';
    }

    @Override
    public int goToRace() {
        System.out.print("The truck nr. " + getVehicleRegistrationPlate() + " carried ");
        return getLoadCapacity();
    }
}
