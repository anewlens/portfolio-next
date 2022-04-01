import projects from '../../data/projects'

describe('Work page project switcher', () => {
    projects.forEach(project => {
        it('clicking the tab will open its panel', () => {
            cy.visit('http://localhost:3000/work');
            cy.get(`button[testid="WorkButton_${project.title}"]`).should('contain', `${project.title}` ).click()
            cy.get(`div[testid="WorkPanel_${project.title}"] h3`).should('contain', `${project.title}`);
        })

        it('can switch images if there are more than one', () => {
            project.views.forEach((view, i) => {
                let regex = new RegExp(view);
                cy.get(`div[testid="WorkPanel_${project.title}"] button[class*="ImageSwitcher_button"]`).eq(i).click();
                cy.get('div[class*="ImageSwitcher_selected"]:not([class="false"])  img').should("have.attr", "src").and("match", regex);
            })
        })

    })


})