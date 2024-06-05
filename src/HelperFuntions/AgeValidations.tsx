/**
 * Returns a function that validates a patient's age based on the provided minimum and maximum age limits.
 * 
 * @param maxAge - The maximum age allowed for the patient.
 * @param providedAge - The age of the patient to be validated.
 * @returns A function that takes a minimum age and returns a boolean indicating if the provided age is within the range.
 */
export const AgeValidations = (maxAge: number, providedAge: number) => {
    return (minAge: number): boolean => {
        return providedAge >= minAge && providedAge <= maxAge;
    };
};
