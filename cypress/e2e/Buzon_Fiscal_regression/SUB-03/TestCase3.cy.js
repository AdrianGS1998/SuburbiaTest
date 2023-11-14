import { faker } from '@faker-js/faker';
const randomName = faker.person.firstName();
const randomlastname = faker.person.lastName();
const randomlastnameM = faker.person.lastName();
const randomEmail = faker.internet.email();

Given('The user open Suburbia web page', () => {
 
  cy.visit('/') 
  
});


When('The user selects Categories from the banner menu', () => {
    
    cy.xpath("//span[@class='a-header__strongLink nav-desktop-menu-action pr-3 pb-3']").contains('Categorías').click()
       

})


Then('The system will display the list of categories correctly and they will be selectable', () => {
     

    const optionCategory = ["Hombre", "Mujer","Niños y Niñas","Bebés","Zapatos","Electrónica","Línea Blanca y Electrodomésticos","Hogar","Muebles","Motos, Autos y Ferretería","Deportes","Salud y Belleza"];
    for (var n = 0; n < 12; n++) {
       
        cy.xpath('//div[@class="col-lg-10"]//span[contains(text(),"'+optionCategory[n]+'")]').should('be.visible')

    }
    for (var n = 0; n < 1; n++) {
       const SelectCategory = (optionCategory[Math.floor(Math.random() * optionCategory.length)])
       cy.xpath('//div[@class="col-lg-10"]//span[contains(text(),"'+SelectCategory+'")]').click({ force: true });
   }

})

When('The user inserts the name of an item in the search engine to add any displayed item to my bag', () => {
     
   cy.wait(4000)
    var optionitem = ["Jeans","Camisas"];
    for (var n = 0; n < 1; n++) {
        const Selectitem = (optionitem[Math.floor(Math.random() * optionitem.length)])
        cy.xpath("//input[@id='mainSearchbar']").type(`${Selectitem}`)
        cy.xpath("//button[@class='input-group-text']//i[@class='icon-zoom']").click({ force: true });
    }

})

Then('The system will display the list of products where they will be added to my bag correctly', () => {
     

    cy.wait(4000)
    function ItemNumber(min,max){
        return Math.round(Math.random()*(max - min) + min); 
    }
    const itemposition  = (ItemNumber(1,10));
    cy.xpath("//img[@id='img_"+itemposition+"']").click({ force: true });
    cy.wait(4000)
   

    cy.xpath('//h1[@class="a-product__information--title"]').then(($txt) => {  
        const txt = $txt.text()
        cy.log(txt)
        cy.xpath("//h1[@class='a-product__information--title']").should('have.text',`${txt}`)

        cy.xpath("//p[@class='m-product__information--code']").should('be.visible')
        cy.xpath("//p[normalize-space()='Envío gratis a todo el país']").should('be.visible')
        cy.xpath("//p[@class='a-product__paragraphQtyLabel m-0']").should('be.visible')
        cy.xpath("//div[@class='col-12 mt-2 mb-3']//div[@class='m-stickyBar__qtyInputs d-flex']").should('be.visible')
        cy.xpath("//p[@class='a-product__paragraphColor m-0 mt-2 mb-1']").should('be.visible')
        cy.xpath("//ul[@id='color-list-mobile']").should('be.visible')
        cy.xpath("//p[@class='a-product__paragraphSize mb-2']").should('be.visible')
        cy.xpath("//ul[@id='size-list-container']").should('be.visible')
        cy.xpath("//span[@class='ml-1 a-product__labelProductShareWeb']").should('be.visible')

        cy.xpath("//button[@id='opc_pdp_addCartButton']").click({ force: true });
        cy.xpath("//div[contains(text(),'Selecciona una talla')]").should('be.visible')
        cy.xpath("//div[contains(@class,'-alert mdc-snackbar--open')]//i[contains(@class,'icon-close mdc-snackbar__dismiss')]").click({ force: true });

        
         
            cy.xpath("//button[@class='a-btn a-btn--actionpdp']").eq(0).then(($txt2) => {  
            const txt2 = $txt2.text()
            cy.log(txt2)
            cy.xpath("//button[@class='a-btn a-btn--actionpdp']").contains(`${txt2}`).click({ force: true });
            cy.xpath("//button[@id='opc_pdp_addCartButton']").should('be.visible').click({ force: true });
            cy.wait(4000)
            cy.xpath("//div[contains(text(),'Agregaste un producto a tu bolsa')]").should('be.visible')
            cy.xpath("//div[contains(@class,'-success mdc-snackbar--open')]//i[contains(@class,'icon-close mdc-snackbar__dismiss')]").should('be.visible').click({ force: true });
            cy.xpath("//button[@class='a-header__bag']//span[contains(text(),'1')]").should('be.visible')
              })
        
    })
   

})

