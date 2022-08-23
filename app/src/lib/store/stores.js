import { writable } from 'svelte/store';

export const visibleMobileMenu = writable(false);
export const visibleBanner_01 = writable(true);

export const form_01_sent = writable(false);
export const form_02_sent = writable(false);
export const form_03_sent = writable(false);

export const formConsultation = writable(false);

export const image = writable(false);
export const currentImage = writable(
	'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjIgNjYiIHdpZHRoPSI0MDAiIGhlaWdodD0iMTE5Ij4KICA8cGF0aCBmaWxsPSIjMjQxYzJjIiBkPSJNNDAgMTMuMjZhNC42NyA0LjY3IDAgMDAtOCAwbC02LjU4IDExLjI3YTMyLjIxIDMyLjIxIDAgMDExNy43NSAyNi42NmgtNC42MmEyNy42OCAyNy42OCAwIDAwLTE1LjQ2LTIyLjcyTDE3IDM5YTE1LjkyIDE1LjkyIDAgMDE5LjIzIDEyLjE3SDE1LjYyYS43Ni43NiAwIDAxLS42Mi0xLjExbDIuOTQtNWExMC43NCAxMC43NCAwIDAwLTMuMzYtMS45bC0yLjkxIDVhNC41NCA0LjU0IDAgMDAxLjY5IDYuMjQgNC42NiA0LjY2IDAgMDAyLjI2LjZoMTQuNTNhMTkuNCAxOS40IDAgMDAtOC0xNy4zMWwyLjMxLTRBMjMuODcgMjMuODcgMCAwMTM0Ljc2IDU1aDEyLjMxYTM1Ljg4IDM1Ljg4IDAgMDAtMTYuNDEtMzEuOGw0LjY3LThhLjc3Ljc3IDAgMDExLjA1LS4yN2MuNTMuMjkgMjAuMjkgMzQuNzcgMjAuNjYgMzUuMTdhLjc2Ljc2IDAgMDEtLjY4IDEuMTNINTEuNnEuMDkgMS45MSAwIDMuODFoNC43OEE0LjU5IDQuNTkgMCAwMDYxIDUwLjQzYTQuNDkgNC40OSAwIDAwLS42Mi0yLjI4em05NS4zMiAyNi4wMmwtMTQuNzYtMTkuMDZoLTMuNjh2MjUuNTVoMy43M1YyNi4xOWwxNS4xOCAxOS41OGgzLjI2VjIwLjIyaC0zLjczem0tMzcuMTctNC43NGgxMy4yM3YtMy4zMkg5OC4xNHYtNy42OWgxNC45M3YtMy4zMkg5NC4zNHYyNS41NmgxOC45MnYtMy4zMkg5OC4xNHpNODIuNTkgMzEuM0M3Ny40NCAzMC4wNiA3NiAyOS4wOCA3NiAyNi43YzAtMi4xNCAxLjg5LTMuNTkgNC43MS0zLjU5YTEyLjA2IDEyLjA2IDAgMDE3LjA3IDIuNTVsMi0yLjgzYTE0LjEgMTQuMSAwIDAwLTktM2MtNS4wNiAwLTguNTkgMy04LjU5IDcuMjcgMCA0LjYgMyA2LjE5IDguNDYgNy41MiA0Ljg2IDEuMTIgNi4zNSAyLjE2IDYuMzUgNC40OXMtMiAzLjc3LTUuMDkgMy43N2ExMi4zNCAxMi4zNCAwIDAxLTguMy0zLjI2bC0yLjI1IDIuNjlhMTUuOTQgMTUuOTQgMCAwMDEwLjQyIDMuODVjNS40OCAwIDktMi45NSA5LTcuNTEtLjAzLTMuODYtMi4zMS01LjkzLTguMTktNy4zNXpNMjA2LjcgMjAuMjJsLTcuNjkgMTItNy42NC0xMmgtNC40NkwxOTcgMzUuNjd2MTAuMTFoMy44NFYzNS41NUwyMTEgMjAuMjJ6bS02NC42MyAzLjQ2aDguMzd2MjIuMWgzLjg0di0yMi4xaDguMzd2LTMuNDZoLTIwLjU3em0zOC4zNCAxMi4xMmMzLjg2LTEuMDcgNi0zLjc3IDYtNy42MyAwLTQuOTEtMy41OS04LTkuMzgtOGgtMTEuMzZ2MjUuNTloMy44di05LjE4aDYuNDVsNi40OCA5LjJoNC40NGwtNy05Ljgyem0tMTAuOTUtMi41di05LjdoNy4xN2MzLjc0IDAgNS44OCAxLjc3IDUuODggNC44NHMtMi4yOSA0Ljg2LTUuODQgNC44NnoiLz4KPC9zdmc+Cg=='
);
