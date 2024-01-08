interface DateUnits {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

const DATE_UNITS: DateUnits = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const getSecondsDiff = (timestamp: number): number =>
  (Date.now() - timestamp) / 1000;

interface UnitAndValueDate {
  value: number;
  unit: keyof DateUnits;
}

const getUnitAndValueDate = (
  secondsElapsed: number
): UnitAndValueDate | undefined => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === "second") {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
      return { value, unit: unit as keyof DateUnits };
    }
  }
};

export function getTimeAgo(dateString: string, mode: string): string {
  if (mode === "short") {
    const timestamp = Number(new Date(dateString));
    const rtf = new Intl.RelativeTimeFormat("en");

    const secondsElapsed = getSecondsDiff(timestamp);
    const unitAndValue = getUnitAndValueDate(secondsElapsed);

    if (unitAndValue) {
      const { value, unit } = unitAndValue;
      return rtf.format(value, unit);
    }
    return "just now";
  } else {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString();

    const time = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    return `${time} - ${formattedDate}`;
  }
}
