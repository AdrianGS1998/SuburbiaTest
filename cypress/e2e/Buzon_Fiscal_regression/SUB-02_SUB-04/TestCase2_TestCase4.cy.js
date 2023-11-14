import { faker } from '@faker-js/faker';
const randomName = faker.person.firstName();
const randomlastname = faker.person.lastName();
const randomlastnameM = faker.person.lastName();
const randomEmail = faker.internet.email();

Given('The user open Suburbia web page', () => {
 
  cy.visit('/') 
  
});


When('The user Enter to Suburbia webpage select the Sign in option', () => {
     
   
    cy.xpath('//span[@class="a-header__topLink"]').click({ force: true });
    cy.xpath('//h1[normalize-space()="Inicia sesión"]').should('be.visible').should('have.text','Inicia sesión')

})


Then('The user will be able to see the Sign in section correctly with all its components', () => {
     

  cy.xpath("//p[contains(text(),'Recuerda que con una sola cuenta puedes ingresar a')]").should('be.visible').should('have.text','\nRecuerda que con una sola cuenta puedes ingresar a todas nuestras tiendas. ')
  cy.xpath("//img[@title='Liverpool']").should('be.visible')
  cy.xpath("//img[@title='Pottery Barn']").should('be.visible')
  cy.xpath("//img[@title='Pottery Barn Kids']").should('be.visible')
  cy.xpath("//img[@title='Westelm']").should('be.visible')
  cy.xpath("//img[@title='Williams Sonoma']").should('be.visible')
  cy.xpath("//img[@title='GAP']").should('be.visible')
  cy.xpath("//img[@title='Banana Republic']").should('be.visible')



  cy.xpath("//h1[normalize-space()='Inicia sesión']").should('be.visible').should('have.text','Inicia sesión')
  cy.xpath("//input[@id='username']").should('be.visible')
  cy.xpath("//input[@id='password']").should('be.visible')
  cy.xpath("//a[normalize-space()='¿Olvidaste tu contraseña?']").should('be.visible')
  cy.xpath("//button[@class='c64e877fc c55256a89 c283fdb19 c26d7a986 cebfbdd72']").should('have.text','Iniciar sesión')
  cy.xpath("//p[@class='c192ddc3e cfcd4ae5f c87f0cc8e']").should('be.visible')
  cy.xpath("//a[normalize-space()='Crear cuenta']").should('be.visible').should('have.text','Crear cuenta')
  cy.xpath("//span[normalize-space()='Continuar con Apple']").should('be.visible').should('have.text','Continuar con Apple')
  cy.xpath("//span[normalize-space()='Continuar con Facebook']").should('be.visible').should('have.text','Continuar con Facebook')

  cy.xpath("//a[normalize-space()='© Términos y condiciones']").should('be.visible').should('have.text','\n© Términos y condiciones\n')
  cy.xpath("//a[normalize-space()='Aviso de Privacidad © 2021']").should('be.visible').should('have.text','\nAviso de Privacidad © 2021\n') 

})




Given('The user is on the suburbia page in the Sign in section', () => {
 
  cy.xpath('//h1[normalize-space()="Inicia sesión"]').should('be.visible').should('have.text','Inicia sesión')
  
});


When('The user selects forgot your password', () => {
     
   
    cy.xpath("//a[normalize-space()='¿Olvidaste tu contraseña?']").should('be.visible').click({ force: true });


})


Then('The system will display the Recover Password section where you can return to the Sign in section', () => {

  cy.xpath("//h1[normalize-space()='¿Olvidaste tu contraseña?']").should('be.visible').contains('¿Olvidaste tu contraseña?')
  cy.xpath("//p[@class='c192ddc3e cfcd4ae5f']").should('be.visible').contains('Ingresa el correo de tu cuenta donde te enviaremos las instrucciones para recuperar tu contraseña. Tu correo debe ser el mismo correo con el que inicias sesión.')
  cy.xpath("//input[@id='email']").should('be.visible')
  cy.xpath("//button[normalize-space()='Continuar']").should('be.visible')
  cy.xpath("//a[normalize-space()='Volver a Suburbia']").should('be.visible').click({ force: true });
  cy.xpath('//h1[normalize-space()="Inicia sesión"]').should('be.visible').should('have.text','Inicia sesión')



})




Given('The user returns to the Sign in section', () => {
 
  cy.xpath("//h1[normalize-space()='Inicia sesión']").should('be.visible').should('have.text','Inicia sesión')
  
});


When('The user enters a valid email', () => {
     
   
    cy.xpath("//input[@id='username']").should('be.visible').type('adrian123213@gmail.com')

})


And('A valid password is entered', () => {
     
  cy.xpath("//input[@id='password']").should('be.visible').type('P@ssword1')

})

Then('The system will allow entry to the user s account and the system will additionally allow the user to log out of their own account', () => {
  cy.xpath("//button[@class='c64e877fc c55256a89 c283fdb19 c26d7a986 cebfbdd72']").should('be.visible').click({ force: true });

  //cy.pause() //Necesito el codigo sms desde mi celular e ingresarlo
  cy.xpath("//span[@class='a-header__topLink popover-session']").should('be.visible').should('have.text','Hola test').click({ force: true });
  cy.wait(3000)
  const optionMenu = ["Mi Cuenta","Mi Cuenta","Cupones","Mis tarjetas","Cerrar sesión"];
    for (var n = 0; n < 5; n++) {
       
        cy.xpath('//a[@class="a-header__sessionLink"]').contains(`${optionMenu[n]}`).should('be.visible')
    }
  cy.wait(3000)
  cy.xpath('//a[@class="a-header__sessionLink"]').contains("Cerrar sesión").click({ force: true });
  cy.xpath("//span[@class='a-header__topLink']").contains("Iniciar sesión").should('be.visible')

  


  

})








