import { CustomersInterface } from "./ICustomer";

export interface PaymentsInterface {
    ID?: number,
    CustomerID: number,
    Customer: CustomersInterface;
    PaymentMethodID: number,
    PaymentMethod: PaymentMethodsInterface;
    CryptoID: number,
    Crypto: CryptosInterface
    BankID: number,
    Bank: BanksInterface
    PlaceID: number,
    Place: PlacesInterface
    Time: Date | null,
    Picture: string;
}

export interface PaymentMethodsInterface {
    ID?: number,
    Name: string;
}

export interface CryptosInterface {
    ID?: number,
    Name: string,
    PublicKey: string,
    Picture: string,
    PaymentMethodID: number,
    PaymentMethod: PaymentMethodsInterface;
}

export interface BanksInterface {
    ID?: number,
    Name: string,
    Number: string,
    Picture: string,
    PaymentMethodID: number,
    PaymentMethod: PaymentMethodsInterface;
}

export interface PlacesInterface {
    ID?: number,
    Name: string,
}