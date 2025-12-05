# FloraTune

갱년기 여성을 위한 개인 맞춤형 프로바이오틱스 구독 서비스

## 프로젝트 구조

```
floratune/
├── frontend/          # React + Vite 프론트엔드
├── backend/           # FastAPI 백엔드
└── README.md
```

## 로컬 개발 환경 설정

### 1. 프론트엔드 실행

```bash
cd frontend
npm install
npm run dev
```

- 개발 서버: http://localhost:5173

### 2. 백엔드 실행

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

- API 서버: http://localhost:8000

## Git 사용 가이드

### 초기 설정 (최초 1회만)

```bash
# Git 사용자 정보 설정
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 프로젝트 디렉토리로 이동
cd /path/to/floratune

# Git 저장소 초기화
git init

# 기본 브랜치를 main으로 설정
git branch -M main

# GitHub 원격 저장소 연결
git remote add origin https://github.com/ihur/FloraTune.git
```

### 일상적인 작업 흐름

#### 1. 변경사항 확인

```bash
# 현재 상태 확인
git status

# 변경된 파일 내용 확인
git diff
```

#### 2. 변경사항 스테이징

```bash
# 모든 변경사항 추가
git add .

# 특정 파일만 추가
git add frontend/src/components/Hero.jsx

# 특정 폴더만 추가
git add frontend/src/components/
```

#### 3. 커밋 생성

```bash
# 커밋 메시지와 함께 커밋
git commit -m "feat: Add product preview page"

# 더 자세한 커밋 메시지 작성
git commit -m "feat: Add product preview page

- Created ProductPreview component
- Added routing for /product-preview
- Updated navigation links"
```

#### 4. GitHub에 푸시

```bash
# main 브랜치에 푸시
git push origin main

# 최초 푸시 시 (upstream 설정)
git push -u origin main
```

### 커밋 메시지 컨벤션

```bash
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락 등
refactor: 코드 리팩토링
test: 테스트 코드 추가
chore: 빌드 업무 수정, 패키지 매니저 수정 등
```

예시:
```bash
git commit -m "feat: Add user authentication"
git commit -m "fix: Resolve image loading issue on product page"
git commit -m "docs: Update README with deployment instructions"
```

### 유용한 Git 명령어

```bash
# 최근 커밋 로그 확인
git log --oneline -10

# 특정 파일의 변경 이력 확인
git log --follow frontend/src/App.jsx

# 마지막 커밋 취소 (변경사항은 유지)
git reset --soft HEAD~1

# 마지막 커밋 메시지 수정
git commit --amend -m "New commit message"

# 원격 저장소 최신 상태 가져오기
git pull origin main

# 브랜치 목록 확인
git branch -a

# 새 브랜치 생성 및 전환
git checkout -b feature/new-feature

# 브랜치 병합
git checkout main
git merge feature/new-feature
```

### 변경사항 되돌리기

```bash
# 작업 디렉토리의 변경사항 취소 (커밋 전)
git checkout -- filename.js

# 스테이징된 파일 취소
git reset HEAD filename.js

# 특정 커밋으로 되돌리기
git revert <commit-hash>
```

## GitHub Pages 배포

### 배포 설정 (최초 1회)

이미 설정되어 있습니다:
- `vite.config.js`에 `base: '/FloraTune/'` 설정됨
- `package.json`에 deploy 스크립트 추가됨

### 배포 실행

```bash
cd frontend
npm run deploy
```

배포 후 사이트 확인: https://ihur.github.io/FloraTune/

### 배포 문제 해결

```bash
# gh-pages 캐시 삭제
rm -rf node_modules/.cache/gh-pages

# macOS 숨김 파일 삭제
find . -name "._*" -type f -delete

# 다시 배포
npm run deploy
```

## 일반적인 작업 시나리오

### 시나리오 1: 새로운 기능 추가

```bash
# 1. 최신 코드 받기
git pull origin main

# 2. 코드 수정 작업

# 3. 변경사항 확인
git status
git diff

# 4. 커밋
git add .
git commit -m "feat: Add new feature description"

# 5. 푸시
git push origin main

# 6. 배포 (프론트엔드 변경 시)
cd frontend
npm run deploy
```

### 시나리오 2: 버그 수정

```bash
# 1. 버그 수정 작업

# 2. 커밋
git add .
git commit -m "fix: Resolve image loading issue"

# 3. 푸시 및 배포
git push origin main
cd frontend
npm run deploy
```

### 시나리오 3: 여러 파일 수정 후 선택적 커밋

```bash
# 1. 관련된 변경사항끼리 묶어서 커밋
git add frontend/src/components/Hero.jsx
git commit -m "feat: Update hero section"

git add frontend/src/components/Team.jsx
git commit -m "feat: Update team information"

# 2. 모두 푸시
git push origin main
```

## 프로젝트 정보

- **프론트엔드**: React + Vite + TailwindCSS + Framer Motion
- **백엔드**: FastAPI + Python
- **배포**: GitHub Pages
- **라우팅**: React Router v6

## 라이선스

Private Project
