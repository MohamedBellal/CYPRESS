describe('template spec', () => {
  it('passes', () => {
      cy.visit('http://127.0.0.1:5500/morpion/vue/morpion.html')
  })

  const a = 'http://127.0.0.1:5500/morpion/vue/morpion.html'

  it('Vérifie si le nombre de cases affichées correspond au carré du nombre choisi', () => {
      cy.visit(a)

      cy.get('.case').its('length').then(initialCaseCount => {
          const initialCases = Math.sqrt(initialCaseCount);

          // Test pour les valeurs entre 3 et 8
          for (let taille = 3; taille <= 8; taille++) {
              const expectedCases = taille * taille;
              cy.get('#taille').clear().type(taille.toString())
              cy.get('#btn_reset').click({
                  force: true
              });
          }

          // Test pour les valeurs inférieures à 3
          const expectedCasesLower = 3 * 3;
          cy.get('#taille').clear().type('2')
          cy.get('#btn_reset').click({
              force: true
          });

          // Test pour les valeurs supérieures à 8
          const expectedCasesUpper = 8 * 8;
          cy.get('#taille').clear().type('9')
          cy.get('#btn_reset').click({
              force: true
          });

          // Test pour les caractères non numériques
          cy.get('#taille').clear().type('abc')
          cy.get('#btn_reset').click({
              force: true
          });
      });
  });


  describe('Catégorie : gestion de la victoire en mode "simple"', () => {
      it('Test 2.1 : la victoire en 3x3 fonctionne sur la ligne 1', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('3');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#11`).click(); // Joueur 1
          cy.get(`#21`).click(); // Joueur 2
          cy.get(`#12`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#13`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      it('Test 2.2 : la victoire en 3x3 fonctionne sur la ligne 3', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('3');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#31`).click(); // Joueur 1
          cy.get(`#21`).click(); // Joueur 2
          cy.get(`#32`).click(); // Joueur 1
          cy.get(`#12`).click(); // Joueur 2
          cy.get(`#33`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      it('Test 2.3 : la victoire en 3x3 fonctionne sur la colonne 1', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('3');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#11`).click(); // Joueur 1
          cy.get(`#12`).click(); // Joueur 2
          cy.get(`#21`).click(); // Joueur 1
          cy.get(`#13`).click(); // Joueur 2
          cy.get(`#22`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.5 : la victoire en 3x3 fonctionne en diagonale
      it('Test 2.5 : la victoire en 3x3 fonctionne en diagonale', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('3');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#11`).click(); // Joueur 1
          cy.get(`#12`).click(); // Joueur 2
          cy.get(`#22`).click(); // Joueur 1
          cy.get(`#13`).click(); // Joueur 2
          cy.get(`#33`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.6 : la victoire en 3x3 fonctionne en diagonale inverse
      it('Test 2.6 : la victoire en 3x3 fonctionne en diagonale inverse', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('3');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#13`).click(); // Joueur 1
          cy.get(`#12`).click(); // Joueur 2
          cy.get(`#22`).click(); // Joueur 1
          cy.get(`#11`).click(); // Joueur 2
          cy.get(`#31`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.7 : la victoire en 8x8 fonctionne sur la ligne 1
      it('Test 2.7 : la victoire en 8x8 fonctionne sur la ligne 1', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('8');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#11`).click(); // Joueur 1
          cy.get(`#21`).click(); // Joueur 2
          cy.get(`#12`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#13`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.8 : la victoire en 8x8 fonctionne sur la ligne 5
      it('Test 2.8 : la victoire en 8x8 fonctionne sur la ligne 5', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('8');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#51`).click(); // Joueur 1
          cy.get(`#21`).click(); // Joueur 2
          cy.get(`#52`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#53`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.9 : la victoire en 8x8 fonctionne sur la ligne 8
      it('Test 2.9 : la victoire en 8x8 fonctionne sur la ligne 8', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('8');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#81`).click(); // Joueur 1
          cy.get(`#21`).click(); // Joueur 2
          cy.get(`#82`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#83`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.10 : la victoire en 8x8 fonctionne sur la diagonale
      it('Test 2.10 : la victoire en 8x8 fonctionne sur la diagonale', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('8');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#11`).click(); // Joueur 1
          cy.get(`#21`).click(); // Joueur 2
          cy.get(`#22`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#33`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.11 : la victoire en 8x8 fonctionne sur la diagonale inverse
      it('Test 2.11 : la victoire en 8x8 fonctionne sur la diagonale inverse', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('8');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#18`).click(); // Joueur 1
          cy.get(`#21`).click(); // Joueur 2
          cy.get(`#27`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#36`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.12 : la victoire en 8x8 fonctionne sur la colonne 1
      it('Test 2.12 : la victoire en 8x8 fonctionne sur la colonne 1', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('8');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#11`).click(); // Joueur 1
          cy.get(`#22`).click(); // Joueur 2
          cy.get(`#31`).click(); // Joueur 1
          cy.get(`#21`).click(); // Joueur 2
          cy.get(`#41`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.13 : la victoire en 8x8 fonctionne sur la colonne 5
      it('Test 2.13 : la victoire en 8x8 fonctionne sur la colonne 5', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('8');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#15`).click(); // Joueur 1
          cy.get(`#22`).click(); // Joueur 2
          cy.get(`#25`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#35`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.14 : la victoire en 8x8 fonctionne sur la colonne 8
      it('Test 2.14 : la victoire en 8x8 fonctionne sur la colonne 8', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('8');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#18`).click(); // Joueur 1
          cy.get(`#22`).click(); // Joueur 2
          cy.get(`#28`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#38`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messagess').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.15 : la victoire en 5x5 fonctionne sur la ligne 1
      it('Test 2.15 : la victoire en 5x5 fonctionne sur la ligne 1', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('5');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#11`).click(); // Joueur 1
          cy.get(`#21`).click(); // Joueur 2
          cy.get(`#12`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#13`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.16 : la victoire en 5x5 fonctionne sur la ligne 3
      it('Test 2.16 : la victoire en 5x5 fonctionne sur la ligne 3', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('5');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#31`).click(); // Joueur 1
          cy.get(`#21`).click(); // Joueur 2
          cy.get(`#32`).click(); // Joueur 1
          cy.get(`#41`).click(); // Joueur 2
          cy.get(`#33`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.17 : la victoire en 5x5 fonctionne sur la ligne 5
      it('Test 2.17 : la victoire en 5x5 fonctionne sur la ligne 5', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('5');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#51`).click(); // Joueur 1
          cy.get(`#21`).click(); // Joueur 2
          cy.get(`#52`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#53`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.18 : la victoire en 5x5 fonctionne sur la diagonale
      it('Test 2.18 : la victoire en 5x5 fonctionne sur la diagonale', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('5');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#11`).click(); // Joueur 1
          cy.get(`#21`).click(); // Joueur 2
          cy.get(`#22`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#33`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.19 : la victoire en 5x5 fonctionne sur la diagonale inverse
      it('Test 2.19 : la victoire en 5x5 fonctionne sur la diagonale inverse', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('5');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#15`).click(); // Joueur 1
          cy.get(`#21`).click(); // Joueur 2
          cy.get(`#24`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#33`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.20 : la victoire en 5x5 fonctionne sur la colonne 1
      it('Test 2.20 : la victoire en 5x5 fonctionne sur la colonne 1', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('5');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#11`).click(); // Joueur 1
          cy.get(`#22`).click(); // Joueur 2
          cy.get(`#21`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#41`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.21 : la victoire en 5x5 fonctionne sur la colonne 3
      it('Test 2.21 : la victoire en 5x5 fonctionne sur la colonne 3', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('5');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#13`).click(); // Joueur 1
          cy.get(`#22`).click(); // Joueur 2
          cy.get(`#23`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#43`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      // Test 2.22 : la victoire en 5x5 fonctionne sur la colonne 5
      it('Test 2.22 : la victoire en 5x5 fonctionne sur la colonne 5', () => {
          cy.visit(a);
          cy.get('#taille').clear().type('5');
          cy.get('#mode').type('somplet')
          cy.get('#btn_reset').click({
              force: true
          });

          cy.get(`#15`).click(); // Joueur 1
          cy.get(`#22`).click(); // Joueur 2
          cy.get(`#25`).click(); // Joueur 1
          cy.get(`#31`).click(); // Joueur 2
          cy.get(`#45`).click(); // Joueur 1

          // Vérifier le messsage de victoire
          cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
      });

      describe('Catégorie : gestion de la victoire en mode "complet"', () => {
          it('Test 2.1 : la victoire en 3x3 fonctionne sur la ligne 1', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('3');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#11`).click();
              cy.get(`#12`).click();
              cy.get(`#13`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.2 : la victoire en 3x3 fonctionne sur la ligne 3', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('3');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#31`).click();
              cy.get(`#32`).click();
              cy.
              cy.get(`#11`).click();
              cy.get(`#21`).click();
              cy.get(`#31`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.4 : la victoire en 3x3 fonctionne sur la colonne 3', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('3');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#13`).click();
              cy.get(`#23`).click();
              cy.get(`#33`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.5 : la victoire en 3x3 fonctionne en diagonale', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('3');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#11`).click();
              cy.get(`#22`).click();
              cy.get(`#33`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.6 : la victoire en 3x3 fonctionne en diagonale inverse', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('3');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#13`).click();
              cy.get(`#22`).click();
              cy.get(`#31`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.7 : la victoire en 8x8 fonctionne sur la ligne 1', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('8');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });


              cy.get(`#11`).click();
              cy.get(`#12`).click();
              cy.get(`#13`).click();
              cy.get(`#14`).click();
              cy.get(`#15`).click();
              cy.get(`#16`).click();
              cy.get(`#17`).click();
              cy.get(`#18`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.8 : la victoire en 8x8 fonctionne sur la ligne 5', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('8');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });


              cy.get(`#51`).click();
              cy.get(`#52`).click();
              cy.get(`#53`).click();
              cy.get(`#54`).click();
              cy.get(`#55`).click();
              cy.get(`#56`).click();
              cy.get(`#57`).click();
              cy.get(`#58`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.9 : la victoire en 8x8 fonctionne sur la ligne 8', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('8');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });


              cy.get(`#81`).click();
              cy.get(`#82`).click();
              cy.get(`#83`).click();
              cy.get(`#84`).click();
              cy.get(`#85`).click();
              cy.get(`#86`).click();
              cy.get(`#87`).click();
              cy.get(`#88`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.10 : la victoire en 8x8 fonctionne sur la diagonale', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('8');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#11`).click();
              cy.get(`#22`).click();
              cy.get(`#33`).click();
              cy.get(`#44`).click();
              cy.get(`#55`).click();
              cy.get(`#66`).click();
              cy.get(`#77`).click();
              cy.get(`#88`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.11 : la victoire en 8x8 fonctionne sur la diagonale inverse', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('8');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#18`).click();
              cy.get(`#27`).click();
              cy.get(`#36`).click();
              cy.get(`#45`).click();
              cy.get(`#54`).click();
              cy.get(`#63`).click();
              cy.get(`#72`).click();
              cy.get(`#81`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.12 : la victoire en 8x8 fonctionne sur la colonne 1', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('8');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#11`).click();
              cy.get(`#11`).click();
              cy.get(`#11`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.13 : la victoire en 8x8 fonctionne sur la colonne 5', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('8');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#15`).click();
              cy.get(`#25`).click();
              cy.get(`#35`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.14 : la victoire en 8x8 fonctionne sur la colonne 8', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('8');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#18`).click();
              cy.get(`#28`).click();
              cy.get(`#38`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.15 : la victoire en 5x5 fonctionne sur la ligne 1', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('5');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#11`).click();
              cy.get(`#12`).click();
              cy.get(`#13`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.16 : la victoire en 5x5 fonctionne sur la ligne 3', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('5');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#31`).click();
              cy.get(`#32`).click();
              cy.get(`#33`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.17 : la victoire en 5x5 fonctionne sur la ligne 5', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('5');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#51`).click();
              cy.get(`#52`).click();
              cy.get(`#53`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.18 : la victoire en 5x5 fonctionne sur la diagonale', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('5');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#11`).click();
              cy.get(`#22`).click();
              cy.get(`#33`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.19 : la victoire en 5x5 fonctionne sur la diagonale inverse', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('5');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#15`).click();
              cy.get(`#24`).click();
              cy.get(`#33`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.20 : la victoire en 5x5 fonctionne sur la colonne 1', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('5');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });


              cy.get(`#11`).click();
              cy.get(`#21`).click();
              cy.get(`#31`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.21 : la victoire en 5x5 fonctionne sur la colonne 3', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('5');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#13`).click();
              cy.get(`#23`).click();
              cy.get(`#33`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });

          it('Test 2.22 : la victoire en 5x5 fonctionne sur la colonne 5', () => {
              cy.visit(a);
              cy.get('#taille').clear().type('5');
              cy.get('#mode').type('Complet')
              cy.get('#btn_reset').click({
                  force: true
              });

              cy.get(`#15`).click();
              cy.get(`#25`).click();
              cy.get(`#35`).click();

              // Vérifier le messsage de victoire
              cy.get('#messages').should('contain', 'Le joueur 1 a gagné !');
          });


          describe('Catégorie : gestion des réglages', () => {
              it('Test 4.1 : changer la taille de la grille à 5x5', () => {
                  cy.visit(a);
                  cy.get('#taille').clear().type('5');
                  cy.get('#mode').type('Complet')
                  cy.get('#btn_reset').click({
                      force: true
                  });

                  // Vérifier que la taille de la grille est correcte
                  cy.get('.ligne').should('have.taille', 5);
                  cy.get('.colonne').should('have.taille', 5);
              });

              it('Test 4.2 : changer la taille de la grille à 8x8', () => {
                  cy.visit(a);
                  cy.get('#taille').clear().type('8');
                  cy.get('#mode').type('Complet')
                  cy.get('#btn_reset').click({
                      force: true
                  });

                  // Vérifier que la taille de la grille est correcte
                  cy.get('.ligne').should('have.length', 8);
                  cy.get('.case').should('have.length', 64);
              });

              it('Test 4.3 : changer la taille de la grille à 3x3', () => {
                  cy.visit(a);
                  cy.get('#taille').clear().type('3');
                  cy.get('#mode').type('Complet')
                  cy.get('#btn_reset').click({
                      force: true
                  });

                  // Vérifier que la taille de la grille est correcte
                  cy.get('.ligne').should('have.length', 3);
                  cy.get('.case').should('have.length', 9);
              });

              it('Test 4.4 : changer la taille de la grille à 4x4', () => {
                  cy.visit(a);
                  cy.get('#taille').clear().type('4');
                  cy.get('#mode').type('Complet')
                  cy.get('#btn_reset').click({
                      force: true
                  });

                  // Vérifier que la taille de la grille est correcte
                  cy.get('.ligne').should('have.length', 4);
                  cy.get('.case').should('have.length', 16);
              });

              it('Test 4.5 : changer la taille de la grille à 6x6', () => {
                  cy.visit(a);
                  cy.get('#taille').clear().type('6');
                  cy.get('#mode').type('Complet')
                  cy.get('#btn_reset').click({
                      force: true
                  });

                  // Vérifier que la taille de la grille est correcte
                  cy.get('.ligne').should('have.length', 6);
                  cy.get('.case').should('have.length', 36);
              });

              it('Test 4.6 : changer la taille de la grille à 7x7', () => {
                  cy.visit(a);
                  cy.get('#taille').clear().type('7');
                  cy.get('#mode').type('Complet')
                  cy.get('#btn_reset').click({
                      force: true
                  });

                  // Vérifier que la taille de la grille est correcte
                  cy.get('.ligne').should('have.length', 7);
                  cy.get('.case').should('have.length', 49);
              });
          });


          describe('Catégorie : affichage', () => {
              it('Test 5.1 : le jeu demande au bon joueur de jouer', () => {
                  cy.visit(a);
                  cy.get('#taille').clear().type('3');
                  cy.get('#mode').type('Complet')
                  cy.get('#btn_reset').click({
                      force: true
                  });

                  // Vérifier si le jeu demande au bon joueur de jouer
                  cy.get('#messages').should('contain', 'Joueur 1, à vous de jouer !');
                  cy.get(`#case-0`).click();
                  cy.get('#messages').should('contain', 'Joueur 2, à vous de jouer !');
              });

              // Répéter pour les autres cas...
          });
          ////////////////////    

          it('Test 2.1 : la victoire en 3x3 fonctionne sur la première ligne', () => {
              // Implémentez les actions nécessaires pour atteindre la victoire sur la première ligne en 3x3
              // Vérifiez que le joueur gagne en alignant 3 symboles
          });

          // Ajouter les tests 2.2 à 2.22
      });

      // Tests pour la catégorie "gestion de la victoire en complet"
      describe('Catégorie : gestion de la victoire en "complet"', () => {
          // Ajouter les tests 3.1 à 3.22
      });

      // Tests pour la catégorie "options du jeu"
      describe('Catégorie : options du jeu', () => {
          // Ajouter les tests 4.1 à 4.6
      });

      // Tests pour la catégorie "affichage"
      describe('Catégorie : affichage', () => {
          // Ajouter les tests 5.1 à 5.5
      });
  })
})