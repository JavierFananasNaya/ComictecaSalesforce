public inherited sharing class BookListController {
    @AuraEnabled
    public static List<Libro__c> getList(){
        try {
        List<Libro__c> books = [SELECT Id, Name, Numero_de_paginas__c, Editorial__c, Ano_de_publicacion__c FROM Libro__c ORDER BY Name];
             return books;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static void getData(String nom, Decimal num_pag, String editorial, Decimal ano){
        try {
        Libro__c newLibro = new Libro__c();
             newLibro.Name = nom;
             newLibro.Numero_de_paginas__C = num_pag;
             newLibro.Editorial__c = editorial;
             newLibro.Ano_de_publicacion__c = ano;
             insert newLibro;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static void getBookToRemove(String idBook){
        try {
        Libro__c book = [SELECT Id, Name, Numero_de_paginas__c, Editorial__c, Ano_de_publicacion__c FROM Libro__c WHERE id = :idBook];
            delete book;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
