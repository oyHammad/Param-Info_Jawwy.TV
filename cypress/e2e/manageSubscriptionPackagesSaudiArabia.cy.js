/// <reference types="Cypress"/>

import { Packages } from "../support/models/Saudi Arabia/saudiArabia";

const packages = new Packages;

describe('Manage subscription packages in Saudi Arabia', () =>
{
  beforeEach(() =>
  {
    cy.visit(Cypress.env('jawwyTv_SaudiArabia'));
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
        expect(litePrice).to.eq('15');
      });
      packages.litePackageCurrency().invoke('text').then((liteCurrency) =>
      {
        cy.log(liteCurrency);
        expect(liteCurrency).to.contain('SAR');
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
      expect(classicPrice).to.eq('25');
    });
    packages.classicPackageCurrency().invoke('text').then((classicCurrency) =>
    {
      cy.log(classicCurrency);
      expect(classicCurrency).to.contain('SAR');
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
      expect(premiumPrice).to.eq('60');
    });
    packages.premiumPackageCurrency().invoke('text').then((premiumCurrency) =>
    {
      cy.log(premiumCurrency);
      expect(premiumCurrency).to.contain('SAR');
    });
  });
});
