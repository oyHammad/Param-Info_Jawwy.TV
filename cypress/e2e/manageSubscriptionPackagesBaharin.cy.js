/// <reference types="Cypress"/>

import { Packages } from "../support/models/Baharin/Baharin";

const packages = new Packages;

describe('Manage subscription packages in Baharin', () =>
{
    beforeEach(() =>
    {
        cy.visit(Cypress.env('jawwyTv_Bahrain'));
    });
    it('Validate the Lite package and price and currency', () =>
    {
        packages.litePackageName().invoke('text').then((litePackage) =>
        {
            cy.log(litePackage);
            expect(litePackage).to.eq('Lite');

            packages.litePackagePrice().invoke('text').then((litePrice) =>
            {
                cy.log(litePrice);
                expect(litePrice).to.eq('2');
            });
            packages.litePackageCurrency().invoke('text').then((liteCurrency) =>
            {
                cy.log(liteCurrency);
                expect(liteCurrency).to.contain('BHD');
            });

        });
    });
    it('Validate the Classic package and price and currency', () =>
    {
        packages.classicPackageName().invoke('text').then((classicPackage) =>
        {
            cy.log(classicPackage);
            expect(classicPackage).to.eq('Classic');
        });
        packages.classicPackagePrice().invoke('text').then((classicPrice) =>
        {
            cy.log(classicPrice);
            expect(classicPrice).to.eq('3');
        });
        packages.classicPackageCurrency().invoke('text').then((classicCurrency) =>
        {
            cy.log(classicCurrency);
            expect(classicCurrency).to.contain('BHD');
        });
    });
    it('Validate the Premium package and price and currency', () =>
    {
        packages.premiumPackageName().invoke('text').then((premiumPackage) =>
        {
            cy.log(premiumPackage);
            expect(premiumPackage).to.eq('Premium');
        });
        packages.premiumPackagePrice().invoke('text').then((premiumPrice) =>
        {
            cy.log(premiumPrice);
            expect(premiumPrice).to.eq('6');
        });
        packages.premiumPackageCurrency().invoke('text').then((premiumCurrency) =>
        {
            cy.log(premiumCurrency);
            expect(premiumCurrency).to.contain('BHD');
        });
    });
});
