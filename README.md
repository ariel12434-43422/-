# Twelve Steps Pro: אתר הקורס

אתר למכירת קורס וידאו מקצועי (12 צעדים, 12 שיעורים עם טים), כולל עמוד נחיתה, אזור צפייה, חוברות עבודה, חבילת Pro ותעודת סיום.

> **מדריך עריכה צעד-אחר-צעד (סרטונים, תמונות, טקסטים): [מדריך-עריכה.md](מדריך-עריכה.md)**

## מבנה הקבצים

```
index.html            עמוד נחיתה שיווקי (Curriculum, Instructor, Pricing, FAQ)
login.html            התחברות (כרגע סימולציה מקומית, בהמשך magic link)
dashboard.html        אזור הצפייה: 12 שיעורים, מעקב התקדמות, חוברות, Pro, תעודה
certificate.html      תעודת סיום, נפתחת רק אחרי 12/12, הורדה כ-PDF דרך הדפסה
assets/js/
  site-config.js      כל הערכים שמשתנים: קישורי תשלום, Bunny library, אימייל
  course-data.js      12 הצעדים: כותרות, תיאורים, videoId, נתיבי חוברות
  auth.js             Auth + Progress (כרגע localStorage, בהמשך Supabase)
  tailwind-theme.js   צבעים ופונטים משותפים (סגנון כהה בהשראת MasterClass)
assets/css/site.css   רקעים קולנועיים, גרעיניות, קרוסלת שיעורים
assets/img/           tim-hero.jpg, tim-portrait.jpg, lessons/step-01.jpg ...
workbooks/            חוברות בסיס (step-01.pdf ... step-12.pdf)
pro/                  חוברות מורחבות ומצגות (רק ל-Pro)
_headers              כותרות אבטחה ו-noindex ל-Cloudflare Pages
```

## תמונות

כל עוד אין תמונה, מוצג רקע קולנועי כהה. ברגע שמוסיפים קובץ בנתיב הנכון הוא מופיע אוטומטית:

- `assets/img/tim-hero.jpg`: תמונת הירו רוחבית, טים בצד ימין, רקע כהה (מומלץ 2400×1350)
- `assets/img/tim-portrait.jpg`: פורטרט 4:5
- `assets/img/lessons/step-01.jpg` עד `step-12.jpg`: תמונת 16:9 לכל שיעור

## הוספת סרטון כשטים מסיים להקליט

1. מעלים את הסרטון ל-Bunny Stream.
2. מדביקים את ה-Video ID ברשימה `VIDEO_IDS` בראש `assets/js/course-data.js`.
3. ממלאים פעם אחת את `video.libraryId` ב-`site-config.js`.

## הרצה מקומית

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## ארכיטקטורה (החלטות)

| רכיב | בחירה | למה |
|---|---|---|
| אחסון | **Cloudflare Pages** + Pages Functions | חינם, מהיר, פונקציות שרת ל-webhooks ולחתימת קישורים |
| וידאו | **Bunny Stream** (ולא Vimeo) | זול משמעותית, Token Authentication שמונע שיתוף embed, נגן נקי |
| תשלום | **Lemon Squeezy** | Merchant of Record: מטפל במע"מ/מס מכירה בכל העולם, תומך במוכרים מישראל, כולל Upsell ומנויים |
| התחברות + DB | **Supabase** (magic link + Postgres) | חסר בהמלצה המקורית: בלי שרת אי אפשר לנעול תוכן או לשמור התקדמות בין מכשירים |
| קבצים מוגנים | **Cloudflare R2** + קישורים חתומים | חוברות ומצגות Pro לא נגישות בלי הרשאה |
| תעודה | יצירה בצד שרת עם ID ייחודי + עמוד אימות ציבורי | תעודה שאפשר לאמת שווה יותר לאנשי מקצוע |

### זרימת רכישה (יעד)

1. לקוח לוחץ "Enroll" ונפתח Lemon Squeezy Checkout.
2. Webhook `order_created` מגיע ל-`/functions/webhooks/lemonsqueezy` (בדיקת חתימה), ונוצרת רשומה ב-`enrollments` (email, plan).
3. הלקוח מקבל מייל עם magic link ונכנס ל-Dashboard.
4. ה-Dashboard מבקש מפונקציית שרת token חתום לכל סרטון וקישור חתום לכל PDF, רק אם יש enrollment מתאים.

## מצב נוכחי: שלב 1 (UI)

- ✅ עמוד נחיתה, התחברות, Dashboard, תעודה, בעיצוב כהה וקולנועי בהשראת MasterClass
- ⚠️ **ההתחברות וההתקדמות מדומות ב-localStorage.** זה לא מאבטח תוכן; זה רק מאפשר לבנות ולבדוק את הממשק.
- ⚠️ Tailwind נטען מ-CDN לפיתוח. לפני עלייה לאוויר עוברים ל-build (Tailwind CLI) לביצועים.

## השלבים הבאים

1. צילום טים: תמונת הירו, פורטרט ותמונה לכל שיעור
2. Supabase: auth + טבלאות `enrollments`, `progress`, `certificates`
3. Lemon Squeezy: מוצרים ($99, $199, upgrade) + webhook
4. Bunny Stream: library + token auth function
5. R2 לחוברות + קישורים חתומים
6. Build ל-Tailwind ו-deploy ל-Cloudflare Pages
