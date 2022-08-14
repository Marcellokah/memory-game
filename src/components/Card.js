// Import pictures of 12 classes
import React, { Component } from 'react'
import warrior from "";
import paladin from "";
import hunter from "";
import rogue from "";
import priest from "";
import shaman from "";
import mage from "";
import warlock from "";
import monk from "";
import druid from "";
import demonhunter from "";
import deathknight from "";
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
            <div className=''>
                <div className=''>
                    <div className='image'>
                        <img
                            src={avatar[num]}
                            id={className[num]}
                            onClick={(e) => {
                                scorePoint(num);
                            }}></img>
                    </div>
                    <div className='content'>
                        <a
                            className=''
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