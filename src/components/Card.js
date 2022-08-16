import warrior from "../images/warrior.jpg";
import paladin from "../images/paladin.jpg";
import hunter from "../images/hunter.jpg";
import rogue from "../images/rogue.jpg";
import priest from "../images/priest.jpg";
import shaman from "../images/shaman.jpg";
import mage from "../images/mage.jpg";
import warlock from "../images/warlock.jpg";
import monk from "../images/monk.jpg";
import druid from "../images/druid.jpg";
import demonhunter from "../images/demonhunter.jpg";
import deathknight from "../images/deathknight.jpg";
import { useState, useEffect } from 'react';

const Card = (props) => {
    const { score, setScore, bestScore, setBestScore } = props;
    const [valSequence, setValSequence] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    const [isRandomized, setIsRandomized] = useState(false);
    const [className, setClassName] = useState([
        "Warrior",
        "Paladin",
        "Hunter",
        "Rogue",
        "Priest",
        "Shaman",
        "Mage",
        "Warlock",
        "Monk",
        "Druid",
        "Demon Hunter",
        "Death Knight"
    ]);

    const [avatar, setAvatar] = useState([
        warrior,
        paladin,
        hunter,
        rogue,
        priest,
        shaman,
        mage,
        warlock,
        monk,
        druid,
        demonhunter,
        deathknight
    ]);

    const [pickedClass, setPickedClass] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ]);

    let recordSet = [];
    let pickedClassSet = [false, false, false, false, false, false, false, false, false, false, false, false,];

    const randomizeVal = () => {
        recordSet = [];
        let valSequenceCopy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        valSequenceCopy.map((e, id) => {
            let number = Math.floor(Math.random() * (11 - 0 + 1) + 0);
            while (recordSet.includes(number)) {
                number = Math.floor(Math.random() * (11 - 0 + 1) + 0);
            }
            valSequenceCopy[id] = number;
            recordSet.push(valSequenceCopy[id]);
            return number;
        });

        setValSequence(recordSet);

    }

    useEffect(() => {
        if (!isRandomized) {
            randomizeVal();
            setIsRandomized(true);
        }
    });

    const scorePoint = (num) => {
        randomizeVal();
        if (pickedClass[num]) {
            if (bestScore < score) {
                setBestScore(score);
            }

            setScore(0);
            pickedClassSet = pickedClassSet.map((e) => {
                return false;
            });
            setPickedClass(pickedClassSet);
        } else {
            setScore(score + 1);
            pickedClassSet = [...pickedClass];
            pickedClassSet[num] = true;
            setPickedClass(pickedClassSet);
        }
    };

    return valSequence.map((num) => {
        return (
            <div className='card-container'>
                <div className='card'>
                    <div className='card-image'>
                        <img
                        className="classImg"
                            alt="CLASS IMG"
                            src={avatar[num]}
                            id={className[num]}
                            onClick={(e) => {
                                scorePoint(num);
                            }}></img>
                    </div>
                    <div className='card-content'>
                        <a
                            className='class-title'
                            id={className[num]}
                            onClick={(e) => {
                                scorePoint(num);
                            }}>{className[num]}</a>
                    </div>
                </div>
            </div>
        );
    });
};

export default Card;