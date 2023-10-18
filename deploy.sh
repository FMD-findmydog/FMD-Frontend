REPOSITORY=/home/ubuntu/deploy
PROJECT_NAME=/home/ubuntu/FMD-Frontend

echo "> 프론트엔드 프로젝트 디렉토리로 이동"

cd $PROJECT_NAME

echo "> Git Pull 프론트엔드 프로젝트"

git pull

cd build

echo "> 프론트엔트 프로젝트 Build 시작"

npm install

npm run build


echo "> 현재 구동중인 애플리케이션 pid 확인"

CURRENT_PID=$(pgrep -f FMD-Frontend)

echo "현재 구동 중인 애플리케이션 pid: $CURRENT_PID"

if [ -z $CURRENT_PID ]; then
    echo "> 현재 구동 중인 애플리케이션이 없으므로 종료하지 않습니다."

else
    echo "> kill -15 $CURRENT_PID"
    kill -15 $CURRENT_PID
    sleep 5

    CURRENT_PID2=$(pgrep -f FMD-Frontend)
    if [ -z $CURRENT_PID2 ]; then
        echo ">정상종료되었습니다."
    else
        echo ">강제 종료합니다."
        kill -9 $CURRENT_PID2
        sleep 5
    fi
fi

echo "> 새 애플리케이션 배포"

npm run start