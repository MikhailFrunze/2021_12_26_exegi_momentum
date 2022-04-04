package de.telran;

public abstract class Vehicle {
    int vehicleRegistrationPlate;
    int yearOfIssue;

    public Vehicle(int vehicleRegistrationPlate, int yearOfIssue) {
        this.vehicleRegistrationPlate = vehicleRegistrationPlate;
        this.yearOfIssue = yearOfIssue;
    }

    public int getVehicleRegistrationPlate() {
        return vehicleRegistrationPlate;
    }

    public void setVehicleRegistrationPlate(int vehicleRegistrationPlate) {
        this.vehicleRegistrationPlate = vehicleRegistrationPlate;
    }

    public int getYearOfIssue() {
        return yearOfIssue;
    }

    public void setYearOfIssue(int yearOfIssue) {
        this.yearOfIssue = yearOfIssue;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "vehicleRegistrationPlate=" + vehicleRegistrationPlate +
                ", yearOfIssue=" + yearOfIssue +
                '}';
    }

    public abstract int goToRace();
}
