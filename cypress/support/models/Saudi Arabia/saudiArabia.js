export class Packages
{
    litePackageName = () => cy.get('#name-lite');
    litePackagePrice = () => cy.get('#currency-lite > b');
    litePackageCurrency = () => cy.get('#currency-lite > i');
    classicPackageName = () => cy.get('#name-classic');
    classicPackagePrice = () => cy.get('#currency-classic > b');
    classicPackageCurrency = () => cy.get('#currency-classic > i');
    premiumPackageName = () => cy.get('#name-premium');
    premiumPackagePrice = () => cy.get('#currency-premium > b');
    premiumPackageCurrency = () => cy.get('#currency-premium > i');
} 