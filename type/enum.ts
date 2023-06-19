{
    /**
     * enum type
     */

    /**
     * javascript
     *
     */

    const MAX_NUM = 6;

    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const THURSDAY = 3;
    const FRIDAY = 4;
    const SATURDAY = 5;
    const SUNDAY = 6;

    const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2, THURSDAY: 3, FRIDAY: 4, SATURDAY: 5, SUNDAY: 6 });
    const dayOfToday = DAYS_ENUM.MONDAY;

    /**
     * typescript
     */

    type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

    enum Days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }

    console.log(Days.Monday);
    let day: Days = Days.Saturday;
    day = Days.Thursday;
    day = 3;
    console.log(day);

    let dayOfWeek: DaysOfWeek = "Saturday";
}
