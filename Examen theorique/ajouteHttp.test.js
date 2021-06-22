describe("Test d'ajout de HTTP ou HTTPS", () => {
    test('should contain http', () =>{
        expect(ajouteHttp('www.google.fr', 'https').toStartWith('https'));
    });
    
    test('should contain http', () =>{
        expect(ajouteHttp('www.google.fr', 'http').toStartWith('https'));
    });
});