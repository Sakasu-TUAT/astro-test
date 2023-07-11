export const getFormattedDate = (isoDate: string) => {
    const dateObj = new Date(isoDate);
  
    const year = dateObj.getUTCFullYear();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
  
    // YYYY.MM.DD 形式の文字列に変換
    const formattedDate = `${year}.${month.toString().padStart(2, '0')}.${day
      .toString()
      .padStart(2, '0')}`;
  
    return formattedDate;
  };