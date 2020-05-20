/**
 * JAVASCRIPT:  Exercices
 * 
 * Listing d'employés
 * 
 * Consignes : 
 * A l'aide de la syntaxe orientée "classes", modélisez un objet "Employee" possédant les caractéristiques suivantes :
 *  Attributs: 
 *  - id (int): identifiant
 *  - lastname (string): nom
 *  - firstname (string): prénom
 *  - email (string): calculé automatiquement dans le constructeur (exemple: John Doe => jdoe@email.fr)
 *  - role (string): poste occupé
 *  - salary (int): salaire annuel BRUT
 *  - hiredate (Date): date d'embauche au format YYYY-MM-DD
 * 
 *  Méthodes:
 *  - getMonthlySalary() : retourne un entier -> le salaire mensuel NET calculé à partir du salaire annuel (salaire_mensuel = salaire_annuel / 12 * 0.75)
 *  - getSeniority() : renvoie une chaine -> l'ancienneté de l'employé (exemples: "19 jours", "3 mois et 2 jours", "2 ans 7 mois et 8 jours") 
 * 
 * Une fois modélisé et testé, complétez le tableau "employees" pour qu'il contienne 5 employés au total (ni plus, ni moins).
 * Parcourir ensuite le tableau complété et afficher chaque employé dans la console (nom, prénom, email, ancienneté, salaire mensuel NET)
 * Afficher ensuite, individuellement : 
 *  - L'employé ayant le plus d'ancienneté
 *  - L'employé avec le plus haut salaire
 *  - L'employé avec le plus bas salaire
 *  - La différence de salaire entre les 2 précédents 
 * 
 * Documentation Javascript complète: https://developer.mozilla.org/fr/docs/Web/JavaScript
 * Tutoriel Javascript: https://www.pierre-giraud.com/javascript-apprendre-coder-cours/introduction/ 
 */



/* COMPLÉTEZ LE PROGRAMME... */

/**
 * @class Employee
 */
class Employee {
    constructor(_id, _nom, _prenom, _role, _salaire, _hiredate) {
        this.id = _id;
        this.nom = _nom;
        this.prenom = _prenom;
        this.email = _prenom.substring(0, 1).toLowerCase() + _nom.toLowerCase() + "@email.fr";
        this.role = _role;
        this.salaire = _salaire;
        this.salaire_Mensuel_Net = this.getMonthlySalary();
        this.date = _hiredate;
    }
    getMonthlySalary() {
        return Math.round((this.salaire / 12) * 0.75);è
    }
}



/** DÉBUT ZONE NON EDITABLE (Ne pas modifier les lignes suivantes) */


/** @var Employee employee1 */
var employee1 = new Employee(1, 'Doe', 'John', 'manager', 82000, new Date('2020-12-28').toLocaleDateString()); // création d'un nouvel employé

/** @var array employees */
const employees = [employee1]; // tableau contenant les employés

/*console.log(employee1); // doit afficher l'objet "employee1"
console.log("Il y a " + employees.length + " employé(e)s."); // doit afficher "Il y a 5 employé(e)s."
console.log(employees); // export des employés dans la console


/** FIN ZONE NON EDITABLE (Ne pas modifier les lignes précédentes) */


// Écrivez votre code à partir de la ligne suivante...
var employee2 = new Employee(2, 'Torrenti', 'Sylvain', 'PDG', 150000, new Date('2015-10-12').toLocaleDateString());
var employee3 = new Employee(3, 'Crouzet', 'Gabriel', 'Maintenance', 25000, new Date('2016-05-20').toLocaleDateString());
var employee4 = new Employee(4, 'Schmitt', 'Joanna', 'Cadre', 100000, new Date('2019-10-15').toLocaleDateString());
var employee5 = new Employee(5, 'Brown', 'Timothy', 'Programmeur', 80000, new Date('2017-11-28').toLocaleDateString());

employees.push(employee2, employee3, employee4, employee5);
console.log("Il y a " + employees.length + " employé(e)s.");
console.log(employees);
