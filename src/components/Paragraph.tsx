import React from "react";
import PropTypes from "prop-types";
import styles from "./Paragraph.module.css";

import { connect } from "react-redux";

export const Paragraph = (/*props*/) => {
  return (
    <div className="text-gray-700 dark:text-gray-300 text-base">
      <p className={styles.twoColumnP}>
        The number 42 is, in The Hitchhiker's Guide to the Galaxy by Douglas
        Adams, the "Answer to the Ultimate Question of Life, the Universe, and
        Everything," calculated by an enormous supercomputer named Deep Thought
        over a period of 7.5 million years. Unfortunately, no one knows what the
        question is. Thus, to calculate the Ultimate Question, a special
        computer the size of a small planet was built from organic components
        and named "Earth". The Ultimate Question "What do you get when you
        multiply six by nine" was found by Arthur Dent and Ford Prefect in the
        second book of the series, The Restaurant at the End of the Universe.
        This appeared first in the radio play and later in the novelization of
        The Hitchhiker's Guide to the Galaxy. The fact that Adams named the
        episodes of the radio play "fits", the same archaic title for a chapter
        or section used by Lewis Carroll in The Hunting of the Snark, suggests
        that Adams was influenced by Carroll's fascination with and frequent use
        of the number. The fourth book in the series, the novel So Long, and
        Thanks for All the Fish, contains 42 chapters. According to the novel
        Mostly Harmless, 42 is the street address of Stavromula Beta. In 1994,
        Adams created the 42 Puzzle, a game based on the number 42. The book 42:
        Douglas Adams' Amazingly Accurate Answer to Life, the Universe and
        Everything (2011) examines Adams' choice of the number 42, and contains
        a compendium of some instances of the number in science, popular
        culture, and humour. Google also has a calculator easter egg when one
        searches "the answer to the ultimate question of life, the universe, and
        everything." Once typed (all in lowercase), the calculator answers with
        the number 42.
      </p>
    </div>
  );
};

Paragraph.propTypes = {
  props: PropTypes,
};

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Paragraph)
