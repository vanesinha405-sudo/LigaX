 //import BasePage from "../BasePage";

  export class DataPickerPage{

     elements = {
        dateInput: () => cy.get('[data-testid="date-filter"]'),   // UPDATE selector
        monthSelect: () => cy.get('.react-datepicker__month-select'),
        yearSelect: () => cy.get('.react-datepicker__year-select'),
        days: () => cy.get('.react-datepicker__day')
    }

    openDatePicker() {
        this.elements.dateInput().click();
    }

    selectYear(year) {
        this.elements.yearSelect().select(year.toString());
    }

    selectMonth(monthIndex) {
        // 0 = January, 11 = December
        this.elements.monthSelect().select(monthIndex.toString());
    }

    selectDay(day) {
        this.elements.days()
            .not('.react-datepicker__day--outside-month')
            .contains(new RegExp(`^${day}$`))
            .click();
    }

    verifySelectedDate(expectedDate) {
        this.elements.dateInput().should('have.value', expectedDate);
    }

    /**
     * Full selection method
     */
    pickDate(date) {
        this.openDatePicker();
        this.selectYear(date.year);
        this.selectMonth(date.monthIndex);
        this.selectDay(date.day);
    }
}
