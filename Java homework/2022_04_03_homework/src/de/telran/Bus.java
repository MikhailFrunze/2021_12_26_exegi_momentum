package de.telran;

public class Bus extends Vehicle {

    int passengerSeatsNumber;

    public Bus(int vehicleRegistrationPlate, int yearOfIssue, int passengerSeatsNumber) {
        super(vehicleRegistrationPlate, yearOfIssue);
        this.passengerSeatsNumber = passengerSeatsNumber;
    }

    public int getPassengerSeatsNumber() {
        return passengerSeatsNumber;
    }

    public void setPassengerSeatsNumber(int passengerSeatsNumber) {
        this.passengerSeatsNumber = passengerSeatsNumber;
    }

    @Override
    public String toString() {
        return "Bus{" +
                "passengerSeatsNumber=" + passengerSeatsNumber +
                ", vehicleRegistrationPlate=" + vehicleRegistrationPlate +
                ", yearOfIssue=" + yearOfIssue +
                '}';
    }

    @Override
    public int goToRace() {
        System.out.print("The bus nr. " + getVehicleRegistrationPlate() + " carried ");
        return getPassengerSeatsNumber();
    }
}
