import styles from "./styles.module.scss";
import Avatar from "/public/assets/avatar.png";

const reviewsData = [
  {
    id: 1,
    name: "Michael Mololuwa",
    feedback:
      "I am so glad I came across Excel Mind at the time I did. It made preparing for my Unified Tertiary Matriculation Examination less stressful, and I could study more effectively because I had past questions to guide me.",
  },
  {
    id: 2,
    name: "Kehinde Adegbesan",
    feedback:
      "After writing and failing Jamb exam 3 times, I was ready to give up on ever passing the exams. ExcelMind changed my story from failure to success, and I know it can do the same for anyone. I would recommend it to any student 100%.",
  },
  {
    id: 2,
    name: "Tewogbola Temitope",
    feedback:
      "My experience writing exams has always been terrible. After going from failure to failure, I eventually stumbled on ExcelMind and that was the turning point for me. Now I enter exam halls confident and certain that I will do well because I am well prepared.",
  },
];

const reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <h2>Why Use Our Platform?</h2>
        <div className={styles.reviewGrid}>
          {reviewsData.map((review) => (
            <article key={review.id} className={styles.reviewCard}>
              <p className={styles.feedback}>{review.feedback}</p>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>
                  <img src={Avatar} alt={`${review.name} avatar`} />
                </div>
                <h4 className={styles.author}>{review.name}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default reviews;
