const t = ["st", "nd", "rd"];
const dddd = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const ddd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MMMM = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const MMM = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jly",
  "Aug",
  "Spt",
  "Oct",
  "Nov",
  "Dec",
];
// moment準拠のフォーマッタ。あまり使われなさそうなものは省いている
const formatter = {
  hh: (date: Date) => `0${date.getHours()}`.slice(-2),
  h: (date: Date) => `${date.getHours()}`,
  HH: (date: Date) => formatter.hh(date), // Javaだと別物だが、12時間表記に対応する気はないのでエイリアス
  H: (date: Date) => formatter.h(date),
  mm: (date: Date) => `0${date.getMinutes()}`.slice(-2),
  m: (date: Date) => `${date.getMinutes()}`,
  ss: (date: Date) => `0${date.getSeconds()}`.slice(-2),
  s: (date: Date) => `${date.getSeconds()}`,
  DD: (date: Date) => `0${date.getDate()}`.slice(-2),
  Do: (date: Date) => `${date.getDate() <= 3 ? t[date.getDate() - 1] : "th"}`,
  D: (date: Date) => `${date.getDate()}`,
  YYYY: (date: Date) => `${date.getFullYear()}`,
  YY: (date: Date) => `${date.getFullYear()}`.slice(-2),
  dddd: (date: Date) => `${dddd[date.getDay()]}`,
  ddd: (date: Date) => `${ddd[date.getDay()]}`,
  MMMM: (date: Date) => `${MMMM[date.getMonth()]}`,
  MMM: (date: Date) => `${MMM[date.getMonth()]}`,
  MM: (date: Date) => `0${date.getMonth() + 1}`.slice(-2),
  M: (date: Date) => `${date.getMonth() + 1}`,
} as const;
const priority: (keyof typeof formatter)[] = [
  "hh",
  "h",
  "HH",
  "H",
  "mm",
  "m",
  "ss",
  "s",
  "DD",
  "Do",
  "D",
  "YYYY",
  "YY",
  "dddd",
  "ddd",
  "MMMM",
  "MMM",
  "MM",
  "M",
];

const reg = new RegExp(priority.map((p) => `(${p})`).join("|"), "g");

class DateUtilClass {
  private padding(str: string | number, num = 2, elem = 0) {
    return `${this.range(num)
      .map(() => elem)
      .join("")}${str}`.slice(-num);
  }
  private range(length: number, start = 0, end = start + length - 1) {
    const result = [];
    for (let i = 0; i < length && i + start <= end; i += 1) {
      result.push(i + start);
    }
    return result;
  }

  public dateFormat(date: Date) {
    const yearStr = date.getFullYear();
    const monthStr = this.padding(date.getMonth() + 1);
    const dateStr = this.padding(date.getDate());
    const dayStr = this.dayFormat(date);
    return `${yearStr}/${monthStr}/${dateStr}(${dayStr})`;
  }

  public dayFormat(date: Date) {
    switch (date.getDay()) {
      case 1:
        return "月";
      case 2:
        return "火";
      case 3:
        return "水";
      case 4:
        return "木";
      case 5:
        return "金";
      case 6:
        return "土";
      default:
        return "日";
    }
  }

  public hourFormat(date: Date) {
    const hourStr = this.padding(date.getHours());
    const minuteStr = this.padding(date.getMinutes());
    return `${hourStr}:${minuteStr}`;
  }

  public dateDiff(tmpA: Date | null, tmpB: Date | null = new Date()) {
    if (!tmpA || !tmpB) {
      return null;
    }
    const a = new Date(tmpA.toISOString());
    a.setHours(0, 0, 0, 0);
    const b = new Date(tmpB.toISOString());
    b.setHours(0, 0, 0, 0);
    return (+a - +b) / (1000 * 60 * 60 * 24);
  }

  public dateHourFormat(date: Date) {
    return `${this.dateFormat(date)} ${this.hourFormat(date)}`;
  }

  /** Date#toISOStringと異なり、オフセットを維持したままISO8601形式に変換する */
  public toISOString(date: Date) {
    const yearStr = date.getFullYear();
    const monthStr = this.padding(date.getMonth() + 1);
    const dateStr = this.padding(date.getDate());
    const hourStr = this.padding(date.getHours());
    const minuteStr = this.padding(date.getMinutes());
    const secondStr = "00";
    const offset = date.getTimezoneOffset();
    const offsetStr = `${this.padding(Math.abs(offset / 60))}:${this.padding(
      offset % 60
    )}`;
    const offsetSymbol = offset > 0 ? "-" : "+";
    return `${yearStr}-${monthStr}-${dateStr}T${hourStr}:${minuteStr}:${secondStr}${offsetSymbol}${offsetStr}`;
  }

  public format(date: Date, formatStr: string) {
    const check = (s: string): s is keyof typeof formatter => s in formatter;
    return formatStr.replace(reg, (s) => (check(s) ? formatter[s](date) : s));
  }

  /** 指定した単位よりも下を切り捨てる */
  public truncate(
    date: Date,
    unit: "year" | "month" | "date" | "hour" | "minute" | "second" = "date"
  ) {
    switch (unit) {
      /* eslint-disable no-fallthrough */
      case "year":
        date.setMonth(0);
      case "month":
        date.setDate(1);
      case "date":
        date.setHours(0);
      case "hour":
        date.setMinutes(0);
      case "minute":
        date.setSeconds(0);
      case "second":
        date.setMilliseconds(0);
      /* eslint-enable no-fallthrough */
    }
    return date;
  }
}

export const DateUtil = new DateUtilClass();
