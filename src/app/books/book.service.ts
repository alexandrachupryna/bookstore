import { EventEmitter, Injectable } from '@angular/core';
import { Book, BookFormat, Language } from './books.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksChanged = new EventEmitter<Book[]>();

  private books: Book[] = [
    new Book(1,
      'Baking Yesteryear: The Best Recipes from the 1900s to the 1980s',
      'B. Dylan Hollis',
      'A decade-by-decade cookbook that highlights the best (and a few of the worst) baking recipes from the 20th century',
      'https://m.media-amazon.com/images/I/51CJCA6VlmL._SX402_BO1,204,203,200_.jpg',
      {
        hardcover: 27.2,
        paperback: 0,
        ebook: 12.99,
        audiobook: 0
      },
      ['Cooking', 'Nonfiction'], 'Alpha', [BookFormat.Hardcover, BookFormat.Ebook], Language.English, 256, true, false),
    new Book(2,
      'It Starts with Us: A Novel (It Ends with Us)',
      'Colleen Hoover',
      'Before It Ends with Us, it started with Atlas. Colleen Hoover tells fan favorite Atlas’s side of the story and shares what comes next in this long-anticipated sequel to the “glorious and touching” (USA TODAY) #1 New York Times bestseller It Ends with Us.',
      'https://m.media-amazon.com/images/P/1668001225.01._SCLZZZZZZZ_SX500_.jpg',
      {
        hardcover: 0,
        paperback: 10.49,
        ebook: 13.99,
        audiobook: 0
      },
      ['Romance', 'Fiction', 'Contemporary'],
      'Alpha', [BookFormat.Paperback, BookFormat.Ebook], Language.English, 256, true, false),
    new Book(3,
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
      'James Clear',
      `No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.`,
      'https://m.media-amazon.com/images/I/51gJpbOQpHL.jpg',
      {
        hardcover: 14.11,
        paperback: 15.63,
        ebook: 12.99,
        audiobook: 14.63
      },
      ['Self-help', 'Psychology', 'Personal development'], 'Avery',
      [BookFormat.Hardcover, BookFormat.Paperback, BookFormat.Ebook, BookFormat.Audiobook], Language.English, 319, true, false),
    new Book(4,
      'Lessons in Chemistry: A Novel',
      'Bonnie Garmus',
      `#1 NEW YORK TIMES BESTSELLER • Meet Elizabeth Zott: a “formidable, unapologetic and inspiring” (PARADE) scientist in 1960s California whose career takes a detour when she becomes the unlikely star of a beloved TV cooking show in this novel that is “irresistible, satisfying and full of fuel” (The New York Times Book Review) and “witty, sometimes hilarious...the Catch-22 of early feminism.” (Stephen King, via Twitter)`,
      'https://m.media-amazon.com/images/I/41UG6tNeHBL._SX334_BO1,204,203,200_.jpg',
      {
        hardcover: 18.26,
        paperback: 27.90,
        ebook: 14.99,
        audiobook: 0
      },
      ['Fiction', 'Historical fiction', 'Romance'],
      'Doubleday', [BookFormat.Hardcover, BookFormat.Paperback, BookFormat.Ebook], Language.English, 400, true, false),
    new Book(5,
      '30 Days Learning to Draw: 30-Day Drawing Checklist with Step By Step Instructions on How to Draw Different Subjects Such as Animals, Plants, Humans, ... (Daily Practice Guide Book for Beginners)',
      'Erik Barrett',
      `Nobody is born adept at drawing; it is a grinding process of constant practice and improving on your previous works. And if you are a beginner at drawing or looking for a book that provides methods and grounds for daily sketching, then you can never go wrong with this 30 Days Learning To Draw book!`,
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654855842i/61260833.jpg',
      {
        hardcover: 0,
        paperback: 13.42,
        ebook: 0,
        audiobook: 0
      },
      ['Arts & Photography'], 'Independently published', [BookFormat.Paperback], Language.English, 214, false, true),
    new Book(6,
      'The Light We Carry: Overcoming in Uncertain Times',
      'Michelle Obama',
      `#1 NEW YORK TIMES AND USA TODAY BESTSELLER • ONE OF TIME’S 100 MUST-READ BOOKS OF 2022 • In an inspiring follow-up to her critically acclaimed, #1 bestselling memoir Becoming, former First Lady Michelle Obama shares practical wisdom and powerful strategies for staying hopeful and balanced in today’s highly uncertain world.`,
      'https://m.media-amazon.com/images/I/41HcM1yzHcL._SX327_BO1,204,203,200_.jpg',
      {
        hardcover: 18.3,
        paperback: 27.5,
        ebook: 16.99,
        audiobook: 0
      },
      ['Nonfiction', 'Biographies & Memoirs', 'Self-help'],
      'Crown', [BookFormat.Hardcover, BookFormat.Paperback, BookFormat.Ebook], Language.English, 336, true, false),
    new Book(7,
      `Saved: A War Reporter's Mission to Make It Home`,
      'Benjamin Hall',
      `When veteran war reporter Benjamin Hall woke up in Kyiv on the morning of March 14, 2022, he had no idea that, within hours, Russian bombs would nearly end his life. As a journalist for Fox News, Hall had worked in dangerous war zones like Syria and Afghanistan, but with three young daughters at home, life on the edge was supposed to be a thing of the past. Yet when Russia viciously attacked Ukraine in February 2022, Hall quickly volunteered to go. A few weeks later, while on assignment, Hall and his crew were blown up in a Russian strike. With Hall himself gravely injured and stuck in Kyiv, it was unclear if he would make it out alive.`,
      'https://m.media-amazon.com/images/I/41+j7f1fVKL._SX329_BO1,204,203,200_.jpg',
      {
        hardcover: 28.8,
        paperback: 0,
        ebook: 15.99,
        audiobook: 0
      },
      ['Nonfiction', 'Biographies & Memoirs'],
      'Harper', [BookFormat.Hardcover, BookFormat.Ebook], Language.English, 288, true, true),
    new Book(8,
      `Win Every Argument: The Art of Debating, Persuading, and Public Speaking`,
      'Mehdi Hasan',
      `MSNBC’s Mehdi Hasan isn’t one to avoid arguments. He relishes them as the lifeblood of democracy and the only surefire way to establish the truth. Arguments help us solve problems, uncover new ideas we might not have considered, and nudge our disagreements toward mutual understanding. A good argument, made in good faith, has intrinsic value―and can also simply be fun.`,
      'https://m.media-amazon.com/images/I/41bKQXRCtUL._SX322_BO1,204,203,200_.jpg',
      {
        hardcover: 18.04,
        paperback: 0,
        ebook: 14.99,
        audiobook: 0
      },
      ['Self-help', 'Nonfiction', 'Personal development'],
      'Henry Holt and Co.', [BookFormat.Hardcover, BookFormat.Ebook], Language.English, 336, false, true),
    new Book(9,
      `The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma`,
      'Bessel van der Kolk M.D.',
      `Trauma is a fact of life. Veterans and their families deal with the painful aftermath of combat; one in five Americans has been molested; one in four grew up with alcoholics; one in three couples have engaged in physical violence. Dr. Bessel van der Kolk, one of the world’s foremost experts on trauma, has spent over three decades working with survivors. In The Body Keeps the Score, he uses recent scientific advances to show how trauma literally reshapes both body and brain, compromising sufferers’ capacities for pleasure, engagement, self-control, and trust. He explores innovative treatments—from neurofeedback and meditation to sports, drama, and yoga—that offer new paths to recovery by activating the brain’s natural neuroplasticity. Based on Dr. van der Kolk’s own research and that of other leading specialists, The Body Keeps the Score exposes the tremendous power of our relationships both to hurt and to heal—and offers new hope for reclaiming lives.`,
      'https://m.media-amazon.com/images/I/41D3enj6JVS._SX324_BO1,204,203,200_.jpg',
      {
        hardcover: 19.39,
        paperback: 11.40,
        ebook: 14.99,
        audiobook: 0
      },
      ['Nonfiction', 'Psychology', 'Self-help'], 'Penguin Publishing Group.',
      [BookFormat.Hardcover, BookFormat.Paperback, BookFormat.Ebook], Language.English, 464, true, false),
    new Book(10,
      `How to Catch a Leprechaun`,
      'Adam Wallace',
      `You've been planning night and day, and finally you've created the perfect trap with shamrocks, pots of gold, and rainbows galore! Now all you need to do is wait. Is this the year you'll finally catch the leprechaun? Start a St. Patrick's Day tradition with this fun and lively children's picture book and get inspired to build leprechaun traps of your own at home or in the classroom! Laugh along in this zany story for kids that blends STEAM concepts with hilarious rhymes and vibrant illustrations!`,
      'https://m.media-amazon.com/images/I/51jayVNubpL._SY498_BO1,204,203,200_.jpg',
      {
        hardcover: 8.01,
        paperback: 6.10,
        ebook: 5.99,
        audiobook: 3.58
      },
      [`Children's`, 'Picture Books', 'Fiction'], 'Sourcebooks Wonderland',
      [BookFormat.Hardcover, BookFormat.Paperback, BookFormat.Ebook, BookFormat.Audiobook], Language.English, 32, false, false),
    new Book(11,
      `Catch a Crayfish, Count the Stars: Fun Projects, Skills, and Adventures for Outdoor Kids`,
      'Steven Rinella',
      `Does climbing a tree, building a bug hotel, spearing a bullfrog, stalking wild animals, and scouting for petrified wood sound more fun than homework or chores? If so, this guide is your perfect companion to endless summer days and rainy fall afternoons alike. Filled with advice, insights, and activities to inspire wonder and excitement about the natural world, Catch a Crayfish, Count the Stars is a curious kid’s treasure trove, filled to the brim with outdoor projects, skills, and adventures complete with illustrations. The book presents a ton of fun and exciting ways to explore the natural world.`,
      'https://m.media-amazon.com/images/I/51Fw6yXZwEL._SX391_BO1,204,203,200_.jpg',
      {
        hardcover: 26.99,
        paperback: 0,
        ebook: 13.99,
        audiobook: 0
      },
      [`Children's`], 'Random House',
      [BookFormat.Hardcover, BookFormat.Ebook ], Language.English, 368, true, false),
    new Book(12,
      `The Boy, the Mole, the Fox and the Horse`,
      'Charlie Mackesy',
      `Enter the world of Charlie's four unlikely friends, discover their story and their most important life lessons. The boy, the mole, the fox and the horse have been shared millions of times online - perhaps you've seen them? They've also been recreated by children in schools and hung on hospital walls. They sometimes even appear on lamp posts and on cafe and bookshop windows. Perhaps you saw the boy and mole on the Comic Relief T-shirt, Love Wins?`,
      'https://m.media-amazon.com/images/I/418D9yYGB3L._SX369_BO1,204,203,200_.jpg',
      {
        hardcover: 12.01,
        paperback: 0,
        ebook: 0,
        audiobook: 0
      },
      [`Children's`, 'Fiction', 'Arts & Photography'], 'HarperOne',
      [BookFormat.Hardcover ], Language.English, 128, true, false),
    new Book(13,
      `Walk the Blue Line: No right, no left―just cops telling their true stories to James Patterson.`,
      'James Patterson',
      `They risk their lives every day to protect and serve our homes, families and communities. Here are their most dramatic true stories, in their own unforgettable words. From the police academy to the precinct, Walk the Blue Line is a first-person tour through the days and nights of American policing.`,
      'https://m.media-amazon.com/images/I/412VF3ajBsL._SX321_BO1,204,203,200_.jpg',
      {
        hardcover: 19.98,
        paperback: 26.49,
        ebook: 14.99,
        audiobook: 12.99
      },
      ['Nonfiction', 'Law', 'Biographies & Memoirs'], 'Little, Brown and Company',
      [BookFormat.Hardcover, BookFormat.Paperback, BookFormat.Ebook, BookFormat.Audiobook], Language.English, 352, true, true),
    new Book(14,
      `Softwar: A Novel Theory on Power Projection and the National Strategic Significance of Bitcoin`,
      'Jason Paul Lowery',
      `This is a high-definition, color-printed manuscript of an academic thesis written by Major Jason Lowery, an active-duty US Space Force astronautical engineer and US National Defense Fellow at MIT tasked with advising senior US military leaders about the national strategic implications of Bitcoin. In this thesis, Lowery presents a novel theory to the US Department of Defense that Bitcoin doesn't just represent a peer-to-peer cash system, it also (and more importantly) represents a new form of digital-age warfare that will transform national security, cyber security, and possibly even the base-layer architecture of the internet. Using scientific concepts from biology, evolution, anthropology, political science, and computer theory, Lowery summarizes the dynamics of power projection in human society and provides an argument for why emerging proof-of-work technologies (namely Bitcoin) will have a dramatic impact on how humans organize, cooperate, and compete on a global scale by empowering populations to project physical power in, from, and through cyberspace. Major Lowery concludes that Bitcoin represents a national strategic imperative that the US should support and adopt as quickly as possible, else it risks losing its lead as a global superpower in the 21st century.`,
      'https://m.media-amazon.com/images/I/416Q44ZCdjL._SX384_BO1,204,203,200_.jpg',
      {
        hardcover: 0,
        paperback: 39.99,
        ebook: 0,
        audiobook: 0
      },
      ['Computers & Technology'], 'Independently published',
      [BookFormat.Paperback], Language.English, 408, true, true),
    new Book(15,
      `Pineapple Street: A Novel`,
      'Jenny Jackson',
      `A deliciously funny, sharply observed debut of family, love, and class, this zeitgeisty novel follows three women in one wealthy Brooklyn clan.`,
      'https://m.media-amazon.com/images/I/513e-qjvFtL._SX329_BO1,204,203,200_.jpg',
      {
        hardcover: 18.48,
        paperback: 30.00,
        ebook: 14.99,
        audiobook: 0
      },
      ['Fiction', 'Contemporary', 'Historical fiction'], 'Pamela Dorman Books',
      [BookFormat.Hardcover, BookFormat.Paperback, BookFormat.Ebook], Language.English, 320, false, true),
    new Book(16,
      `Half Baked Harvest Every Day: Recipes for Balanced, Flexible, Feel-Good Meals: A Cookbook`,
      'Tieghan Gerard',
      `The millions of fans of the Half Baked Harvest blog and bestselling books have fallen in love with Tieghan Gerard's recipes for their wholesome decadence, non-fussy approach, and smart twists on comforting favorites. Written and photographed in the stunning mountains of Colorado, inspired by her big, unique family, and focused on what you'll want to eat day-in-day-out, Half Baked Harvest Every Day delivers all-new recipes that will feed your body and soul.`,
      'https://m.media-amazon.com/images/I/51xiuHJv5DL._SX398_BO1,204,203,200_.jpg',
      {
        hardcover: 15.60,
        paperback: 0,
        ebook: 13.99,
        audiobook: 0
      },
      ['Cooking', 'Nonfiction'], 'Clarkson Potter',
      [BookFormat.Hardcover, BookFormat.Ebook], Language.English, 288, true, false),
    new Book(17,
      `Plant-Based on a Budget Quick & Easy: 100 Fast, Healthy, Meal-Prep, Freezer-Friendly, and One-Pot Vegan Recipes.`,
      'Toni Okamoto',
      `Popular budget-conscious and plant-based chef Toni Okamoto is back to make mealtime delicious, affordable, and easier than ever—with 100 vegan recipes for meal prep, one-pot and one-pan meals, make-ahead dishes, sheet pan suppers, and more.`,
      'https://m.media-amazon.com/images/I/51m6Gx0aARL._SX388_BO1,204,203,200_.jpg',
      {
        hardcover: 0,
        paperback: 20.56,
        ebook: 12.99,
        audiobook: 0
      },
      ['Cooking', 'Nonfiction', 'Health'], 'BenBella Books',
      [BookFormat.Paperback, BookFormat.Ebook], Language.English, 256, true, true),
    new Book(18,
      'Hábitos atómicos',
      'James Clear',
      `HÁBITOS ATÓMICOS parte de una simple pero poderosa pregunta: ¿Cómo podemos vivir mejor? Sabemos que unos buenos hábitos nos permiten mejorar significativamente nuestra vida, pero con frecuencia nos desviamos del camino: dejamos de hacer ejercicio, comemos mal, dormimos poco, despilfarramos. ¿Por qué es tan fácil caer en los malos hábitos y tan complicado seguir los buenos?`,
      'https://m.media-amazon.com/images/I/51T6HVBFrtL.jpg',
      {
        hardcover: 0,
        paperback: 14.91,
        ebook: 12.99,
        audiobook: 14.63
      },
      ['Self-help', 'Psychology', 'Personal development'], 'Avery',
      [BookFormat.Paperback, BookFormat.Ebook, BookFormat.Audiobook], Language.Spanish, 319, true, false),
    new Book(19,
      'Never Never: A twisty, angsty romance',
      'Colleen Hoover, Tarryn Fisher',
      `Colleen Hoover, the #1 New York Times bestselling author of It Starts with Us joins forces with Tarryn Fisher, the New York Times bestselling author of The Wives. Together, they have created a gripping, twisty, romantic mystery unlike any other.`,
      'https://m.media-amazon.com/images/I/51k8HAZ255L._SX331_BO1,204,203,200_.jpg',
      {
        hardcover: 27.00,
        paperback: 13.48,
        ebook: 13.99,
        audiobook: 0
      },
      ['Romance', 'Contemporary', 'Fiction'], 'Canary Street Press',
      [BookFormat.Hardcover, BookFormat.Paperback, BookFormat.Ebook], Language.English, 416, false, true),
    new Book(20,
      'The 48 Laws of Power',
      'Robert Greene',
      `In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum.`,
      'https://m.media-amazon.com/images/I/41KY-NORo9L._SX355_BO1,204,203,200_.jpg',
      {
        hardcover: 27.31,
        paperback: 13.59,
        ebook: 16.99,
        audiobook: 0
      },
      ['Nonfiction', 'Psychology', 'Self-help'], 'Penguin Books',
      [BookFormat.Hardcover, BookFormat.Paperback, BookFormat.Ebook], Language.English, 452, true, false),
    new Book(21,
      'Young Forever: The Secrets to Living Your Longest, Healthiest Life',
      'Dr. Mark Hyman MD',
      `In Young Forever, Dr. Mark Hyman challenges us to reimagine our biology, health, and the process of aging. To uncover the secrets to longevity, he explores the biological hallmarks of aging, their causes, and their consequences—then shows us how to overcome them with simple dietary, lifestyle, and emerging longevity strategies.`,
      'https://m.media-amazon.com/images/I/41jcolfcnEL._SX321_BO1,204,203,200_.jpg',
      {
        hardcover: 18.92,
        paperback: 0,
        ebook: 14.99,
        audiobook: 13.59
      },
      ['Health', 'Nonfiction', 'Self-help'], 'Little, Brown Spark',
      [BookFormat.Hardcover, BookFormat.Ebook, BookFormat.Audiobook], Language.English, 352, false, true),
    new Book(22,
      'The Greatness Mindset: Unlock the Power of Your Mind and Live Your Best Life Today',
      'Lewis Howes',
      `Through his New York Times best-selling book and podcast The School of Greatness, Greatness Academy, and inspirational events, entrepreneur Lewis Howes has provided millions worldwide with the tools they need to define their mission, craft specific goals, and develop a game plan to get the results they want. In The Greatness Mindset, Lewis takes his results-driven system one step further by taking a deep dive into the mindset shifts you need to truly see and acknowledge your own greatness and allow it to reach its fullest potential.`,
      'https://m.media-amazon.com/images/I/51FVZOs+XqL._SX331_BO1,204,203,200_.jpg',
      {
        hardcover: 16.81,
        paperback: 0,
        ebook: 16.99,
        audiobook: 0
      },
      ['Nonfiction', 'Self-help', 'Personal development'], 'Hay House Inc.',
      [BookFormat.Hardcover, BookFormat.Ebook], Language.English, 336, true, true),
    new Book(23,
      'My Own Words',
      'Ruth Bader Ginsburg',
      `The first book from Ruth Bader Ginsburg since becoming a Supreme Court Justice in 1993—a witty, engaging, serious, and playful collection of writings and speeches from the woman who has had a powerful and enduring influence on law, women’s rights, and popular culture.`,
      'https://m.media-amazon.com/images/I/51BeSDIqMzL.jpg',
      {
        hardcover: 25.31,
        paperback: 10.37,
        ebook: 0,
        audiobook: 0
      },
      ['Nonfiction', 'Biographies & Memoirs', 'Law'], 'Simon & Schuster',
      [BookFormat.Hardcover, BookFormat.Paperback], Language.English, 522, true, true),
    new Book(24,
      'The Creative Act: A Way of Being',
      'Rick Rubin',
      `From the legendary music producer, a master at helping people connect with the wellsprings of their creativity, comes a beautifully crafted book many years in the making that offers that same deep wisdom to all of us.`,
      'https://m.media-amazon.com/images/I/41AkIg2fDcL._SX339_BO1,204,203,200_.jpg',
      {
        hardcover: 20.12,
        paperback: 16.99,
        ebook: 0,
        audiobook: 0
      },
      ['Nonfiction', 'Arts & Photography', 'Psychology'], 'Penguin Press',
      [BookFormat.Hardcover, BookFormat.Paperback], Language.English, 432, true, true),
  ]

  constructor() { }

  getBooks() {
    return this.books.slice();
  }

  setBooks(books: Book[]) {
    this.books = books;
    this.booksChanged.emit(this.books)
  }

  getBook(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  getPrice(book: Book, format: BookFormat) {
    let price: number = 0;
    switch(format) {
      case 'Hardcover': price = book.price.hardcover || 0;
        break;
      case 'Paperback': price = book.price.paperback|| 0;
        break;
      case 'Ebook': price = book.price.ebook|| 0;
        break;
      case 'Audiobook': price = book.price.audiobook|| 0;
        break;
    }
    return price;
  }

}
