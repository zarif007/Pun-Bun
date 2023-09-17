const formateDate = (createdAt: string | Date): string => {

    const date = new Date(createdAt);

    // Get the day, month, and year from the Date object
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' }); // Full month name
    const year = date.getFullYear();

    // Create the desired Day, Month, Year format string
    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate
}

export default formateDate