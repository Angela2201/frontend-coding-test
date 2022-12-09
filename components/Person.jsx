import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Person.module.css';
import { convertToPath } from '../lib/utils';

function Person({ item, showAs }) {

    if (showAs === 'Page') {
        return (
            <div className={styles.page}>
                <div className={styles.image}>
                    <Image
                    src={item.picture}
                    alt={item.fullName}
                    width={400}
                    height={400}
                    />
                </div>

                <div className={styles.info}>
                    <div>
                        <h2>Name: {item.fullName}</h2>
                    </div>
                    <div>
                        Age: {item.age}
                    </div>
                    <div>
                        Occupation: {item.occupation}
                    </div>
                    <div>
                        Nickname: {item.nickname}
                    </div>
                    <div>
                        Gender: {item.gender}
                    </div>
                    <div>
                        <Link href={`${convertToPath(item.fullName)}/Edit`}>
                            <button className={styles.edit}>Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className={styles.item}>
        <div>
            <Link href={`/people/${convertToPath(item.fullName)}`}>
                <a>
                    <Image
                        src={item.picture}
                        alt={item.fullName}
                        width={100}
                        height={100}
                    />
                </a>
            </Link>
        </div>
        <div>
            <h3>
                <a>Name: {item.fullName}</a>
            </h3>
        </div>

        <div>Age: {item.age}</div>
        <div>Occupation: {item.occupation}</div>
    </div>
  )
}

export default Person
