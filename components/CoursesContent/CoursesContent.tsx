import { Box, Container } from "@mui/material";
import { CoursePart } from "../../models/course";
import { Typography } from "../Typography";

export interface CoursesContentProps {
  courses: CoursePart[];
}

const CoursesContent: React.FC<CoursesContentProps> = ({
  courses,
}: CoursesContentProps) => {
  const types = courses
    .map((e) => e.type)
    .filter((value, index, self) => self.indexOf(value) === index);
  const partnerCoursesIndex = courses.findIndex((e) =>
    e.type?.toLocaleLowerCase().includes("parceiro"),
  );
  if (partnerCoursesIndex > -1) {
    const partnerEventsType = types[partnerCoursesIndex];
    types.splice(partnerCoursesIndex, 1);
    types.push(partnerEventsType);
  }
  return (
    <Box
      data-scroll-wrapper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {types.map((type) => {
        const coursesOfType = courses
          .filter((e) => e.type === type)
          .sort((a, b) => {
            if (a.dateTime < b.dateTime) return 1;
            if (a.dateTime > b.dateTime) return -1;
            return 0;
          });
        const missingBoxes = [];
        for (let i = 0; i < 4 - coursesOfType.length; i++) {
          missingBoxes.push(i);
        }
        return (
          <Container
            data-scroll-wrapper
            key={type}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "56px 0",
              gap: "24px",
            }}
          >
            <Typography
              variant="h3"
              sx={{ paddingX: { xs: "16px", sm: "0" }, mb: "12px" }}
            >
              {type}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "start",
                flexWrap: "wrap",
                gap: { xs: "40px", sm: "16px" },
                rowGap: "40px !important",
              }}
            >
              {coursesOfType.map((courseData) => {
                return (
                  <CourseCard
                    key={courseData.slug}
                    {...courseData}
                    color="contrast"
                    shadowed
                  />
                );
              })}
              {missingBoxes.map((index) => {
                return (
                  <Box key={index} sx={{ flex: 1 }}>
                    &nbsp;
                  </Box>
                );
              })}
            </Box>
          </Container>
        );
      })}
    </Box>
  );
};

export default CoursesContent;
